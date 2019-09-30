import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Person2group2roleP2G2r } from './person2group2role_p2g2r';

@Entity('person_per', { schema: 'churchcrm' })
@Index('per_ID', ['PerID'])
export class PersonPer {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'per_ID',
  })
  public PerID: number;

  @OneToMany((type) => Person2group2roleP2G2r, (group) => group.PerID)
  public P2G2r: Person2group2roleP2G2r[];

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Title',
  })
  public PerTitle: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_FirstName',
  })
  public PerFirstName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_MiddleName',
  })
  public PerMiddleName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_LastName',
  })
  public PerLastName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Suffix',
  })
  public PerSuffix: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Address1',
  })
  public PerAddress1: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Address2',
  })
  public PerAddress2: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_City',
  })
  public PerCity: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_State',
  })
  public PerState: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Zip',
  })
  public PerZip: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Country',
  })
  public PerCountry: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_HomePhone',
  })
  public PerHomePhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_WorkPhone',
  })
  public PerWorkPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'per_CellPhone',
  })
  public PerCellPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Email',
  })
  public PerEmail: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_WorkEmail',
  })
  public PerWorkEmail: string | null;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    name: 'per_BirthMonth',
  })
  public PerBirthMonth: number;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    name: 'per_BirthDay',
  })
  public PerBirthDay: number;

  @Column('year', {
    nullable: true,
    name: 'per_BirthYear',
  })
  public PerBirthYear: number | null;

  @Column('date', {
    nullable: true,
    name: 'per_MembershipDate',
  })
  public PerMembershipDate: string | null;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    name: 'per_Gender',
  })
  public PerGender: number;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    name: 'per_fmr_ID',
  })
  public PerfmrID: number;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    name: 'per_cls_ID',
  })
  public PerClsID: number;

  @Column('smallint', {
    nullable: true,
    name: 'per_Envelope',
  })
  public PerEnvelope: number | null;

  @Column('datetime', {
    nullable: true,
    name: 'per_DateLastEdited',
  })
  public PerDateLastEdited: Date | null;

  @Column('datetime', {
    nullable: false,
    name: 'per_DateEntered',
  })
  public PerDateEntered: Date;

  @Column('smallint', {
    nullable: false,
    default: 0,
    name: 'per_EnteredBy',
  })
  public PerEnteredBy: number;

  @Column('smallint', {
    nullable: true,
    default: 0,
    name: 'per_EditedBy',
  })
  public PerEditedBy: number | null;

  @Column('date', {
    nullable: true,
    name: 'per_FriendDate',
  })
  public PerFriendDate: string | null;

  @Column('mediumint', {
    nullable: false,
    default: 0,
    name: 'per_Flags',
  })
  public PerFlags: number;

  @Column('bigint', {
    nullable: true,
    name: 'per_FacebookID',
  })
  public PerFacebookID: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_Twitter',
  })
  public PerTwitter: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'per_LinkedIn',
  })
  public PerLinkedIn: string | null;

  @Column('mediumint', {
    nullable: false,
    default: 0,
    name: 'per_fam_ID',
  })
  public PerFamID: number;
}
