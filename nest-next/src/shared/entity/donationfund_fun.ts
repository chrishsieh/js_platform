import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('donationfund_fun', { schema: 'churchcrm' })
@Index('fun_ID', ['fun_ID'], { unique: true })
export class donationfund_fun {
  @PrimaryGeneratedColumn({
    type: 'tinyint',
    name: 'fun_ID',
  })
  fun_ID: number;

  @Column('enum', {
    nullable: false,
    default: () => "'true'",
    enum: ['true', 'false'],
    name: 'fun_Active',
  })
  fun_Active: string;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fun_Name',
  })
  fun_Name: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'fun_Description',
  })
  fun_Description: string | null;
}
