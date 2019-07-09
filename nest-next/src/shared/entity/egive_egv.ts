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

@Entity('egive_egv', { schema: 'churchcrm' })
export class egive_egv {
  @Column('varchar', {
    nullable: false,
    length: 16,
    name: 'egv_egiveID',
  })
  egv_egiveID: string;

  @PrimaryColumn('int', {
    nullable: false,
    name: 'egv_famID',
  })
  egv_famID: number;

  @Column('datetime', {
    nullable: false,
    name: 'egv_DateEntered',
  })
  egv_DateEntered: Date;

  @Column('datetime', {
    nullable: false,
    name: 'egv_DateLastEdited',
  })
  egv_DateLastEdited: Date;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'egv_EnteredBy',
  })
  egv_EnteredBy: number;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'egv_EditedBy',
  })
  egv_EditedBy: number;
}
