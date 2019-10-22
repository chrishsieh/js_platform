import { parse } from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(path: string = 'development') {
    this.envConfig = this.validateConfig(parse(fs.readFileSync('.env')));
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public read(): EnvConfig {
    return this.envConfig;
  }

  private validateConfig(envConfig: EnvConfig) {
    const envSchema = Joi.object({
      CACHE_TTL: Joi.number().default(50),
      PORT: Joi.number().default(80),
      DB_TYPE: Joi.string(),
      DB_HOST: Joi.string(),
      DB_PORT: Joi.number().default(3306),
      DB_DATABASE: Joi.string(),
      DB_USER: Joi.string(),
      DB_PASSWORD: Joi.string(),
    });

    const { error, value } = Joi.validate(envConfig, envSchema);

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return value;
  }
}
