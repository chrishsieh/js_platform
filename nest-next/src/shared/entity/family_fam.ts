import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { person_per } from './person_per';

@Entity('family_fam', { schema: 'churchcrm' })
@Index('fam_ID', ['fam_ID'])
// tslint:disable-next-line: class-name
export class family_fam {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'fam_ID',
  })
  // tslint:disable-next-line: variable-name
  public fam_ID: number;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Name',
  })
  // tslint:disable-next-line: variable-name
  public fam_Name: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'fam_Address1',
  })
  fam_Address1: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'fam_Address2',
  })
  fam_Address2: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_City',
  })
  fam_City: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_State',
  })
  fam_State: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Zip',
  })
  fam_Zip: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Country',
  })
  fam_Country: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_HomePhone',
  })
  fam_HomePhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_WorkPhone',
  })
  fam_WorkPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_CellPhone',
  })
  fam_CellPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'fam_Email',
  })
  fam_Email: string | null;

  @Column('date', {
    nullable: true,
    name: 'fam_WeddingDate',
  })
  fam_WeddingDate: string | null;

  @Column('datetime', {
    nullable: false,
    name: 'fam_DateEntered',
  })
  fam_DateEntered: Date;

  @Column('datetime', {
    nullable: true,
    name: 'fam_DateLastEdited',
  })
  fam_DateLastEdited: Date | null;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_EnteredBy',
  })
  fam_EnteredBy: number;

  @Column('smallint', {
    nullable: true,
    default: () => "'0'",
    name: 'fam_EditedBy',
  })
  fam_EditedBy: number | null;

  @Column('text', {
    nullable: true,
    name: 'fam_scanCheck',
  })
  fam_scanCheck: string | null;

  @Column('text', {
    nullable: true,
    name: 'fam_scanCredit',
  })
  fam_scanCredit: string | null;

  @Column('enum', {
    nullable: false,
    default: () => "'FALSE'",
    enum: ['FALSE', 'TRUE'],
    name: 'fam_SendNewsLetter',
  })
  fam_SendNewsLetter: string;

  @Column('date', {
    nullable: true,
    name: 'fam_DateDeactivated',
  })
  fam_DateDeactivated: string | null;

  @Column('enum', {
    nullable: false,
    default: () => "'FALSE'",
    enum: ['FALSE', 'TRUE'],
    name: 'fam_OkToCanvass',
  })
  fam_OkToCanvass: string;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_Canvasser',
  })
  fam_Canvasser: number;

  @Column('double', {
    nullable: true,
    name: 'fam_Latitude',
  })
  fam_Latitude: number | null;

  @Column('double', {
    nullable: true,
    name: 'fam_Longitude',
  })
  fam_Longitude: number | null;

  @Column('mediumint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_Envelope',
  })
  fam_Envelope: number;
}
