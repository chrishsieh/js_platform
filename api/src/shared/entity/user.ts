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

@Entity('user_tab', { schema: 'demo' })
export class Users {
  @PrimaryGeneratedColumn()
  usr_per_ID: number;

  @Column('datetime', {
    nullable: false,
    default: () => "'2019-01-01 00:00:00'",
    name: 'usr_CreateDate',
  })
  usr_CreateDate: Date;

  @Column('datetime', {
    nullable: false,
    default: () => "'2019-01-01 00:00:00'",
    name: 'usr_LastLogin',
  })
  usr_LastLogin: Date;

  @Column('varchar', {
    nullable: true,
    unique: true,
    length: 32,
    name: 'usr_UserName',
  })
  usr_UserName: string | null;

  @Column('varchar', {
    nullable: true,
    unique: true,
    name: 'usr_apiKey',
  })
  usr_apiKey: string | null;
}
