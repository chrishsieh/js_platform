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

@Entity('person_per', { schema: 'churchcrm' })
@Index('per_ID', ['per_ID'])
export class person_per {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'per_ID',
  })
  per_ID: number;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Title',
  })
  per_Title: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_FirstName',
  })
  per_FirstName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_MiddleName',
  })
  per_MiddleName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_LastName',
  })
  per_LastName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Suffix',
  })
  per_Suffix: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Address1',
  })
  per_Address1: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Address2',
  })
  per_Address2: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_City',
  })
  per_City: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_State',
  })
  per_State: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Zip',
  })
  per_Zip: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Country',
  })
  per_Country: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_HomePhone',
  })
  per_HomePhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_WorkPhone',
  })
  per_WorkPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_CellPhone',
  })
  per_CellPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Email',
  })
  per_Email: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_WorkEmail',
  })
  per_WorkEmail: string | null;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_BirthMonth',
  })
  per_BirthMonth: number;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_BirthDay',
  })
  per_BirthDay: number;

  @Column('year', {
    nullable: true,
    name: 'per_BirthYear',
  })
  per_BirthYear: number | null;

  @Column('date', {
    nullable: true,
    name: 'per_MembershipDate',
  })
  per_MembershipDate: string | null;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_Gender',
  })
  per_Gender: number;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_fmr_ID',
  })
  per_fmr_ID: number;

  @Column('tinyint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_cls_ID',
  })
  per_cls_ID: number;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_fam_ID',
  })
  per_fam_ID: number;

  @Column('smallint', {
    nullable: true,
    name: 'per_Envelope',
  })
  per_Envelope: number | null;

  @Column('datetime', {
    nullable: true,
    name: 'per_DateLastEdited',
  })
  per_DateLastEdited: Date | null;

  @Column('datetime', {
    nullable: false,
    name: 'per_DateEntered',
  })
  per_DateEntered: Date;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_EnteredBy',
  })
  per_EnteredBy: number;

  @Column('smallint', {
    nullable: true,
    default: () => "'0'",
    name: 'per_EditedBy',
  })
  per_EditedBy: number | null;

  @Column('date', {
    nullable: true,
    name: 'per_FriendDate',
  })
  per_FriendDate: string | null;

  @Column('mediumint', {
    nullable: false,
    default: () => "'0'",
    name: 'per_Flags',
  })
  per_Flags: number;

  @Column('bigint', {
    nullable: true,
    name: 'per_FacebookID',
  })
  per_FacebookID: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Twitter',
  })
  per_Twitter: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_LinkedIn',
  })
  per_LinkedIn: string | null;
}
