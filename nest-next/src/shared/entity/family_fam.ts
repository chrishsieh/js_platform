import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
export enum TF_Type {
  FALSE = 'FALSE',
  TRUE = 'TRUE',
}

@Entity('family_fam', { schema: 'churchcrm' })
@Index('fam_ID', ['FamID'])
export class FamilyFam {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'fam_ID',
  })
  public FamID: number;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Name',
  })
  public FamName: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'fam_Address1',
  })
  public FamAddress1: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'fam_Address2',
  })
  public FamAddress2: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_City',
  })
  public FamCity: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_State',
  })
  public FamState: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Zip',
  })
  public FamZip: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'fam_Country',
  })
  public FamCountry: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_HomePhone',
  })
  public FamHomePhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_WorkPhone',
  })
  public FamWorkPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 30,
    name: 'fam_CellPhone',
  })
  public FamCellPhone: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'fam_Email',
  })
  public FamEmail: string | null;

  @Column('date', {
    nullable: true,
    name: 'fam_WeddingDate',
  })
  public FamWeddingDate: string | null;

  @Column('datetime', {
    nullable: false,
    name: 'fam_DateEntered',
  })
  public FamDateEntered: Date;

  @Column('datetime', {
    nullable: true,
    name: 'fam_DateLastEdited',
  })
  public FamDateLastEdited: Date | null;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_EnteredBy',
  })
  public FamEnteredBy: number;

  @Column('smallint', {
    nullable: true,
    default: () => "'0'",
    name: 'fam_EditedBy',
  })
  public FamEditedBy: number | null;

  @Column('text', {
    nullable: true,
    name: 'fam_scanCheck',
  })
  public FamscanCheck: string | null;

  @Column('text', {
    nullable: true,
    name: 'fam_scanCredit',
  })
  public FamscanCredit: string | null;

  @Column('enum', {
    nullable: false,
    default: TF_Type.FALSE,
    enum: TF_Type,
    name: 'fam_SendNewsLetter',
  })
  public FamSendNewsLetter: string;

  @Column('date', {
    nullable: true,
    name: 'fam_DateDeactivated',
  })
  public FamDateDeactivated: string | null;

  @Column('enum', {
    nullable: false,
    default: TF_Type.FALSE,
    enum: TF_Type,
    name: 'fam_OkToCanvass',
  })
  public FamOkToCanvass: string;

  @Column('smallint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_Canvasser',
  })
  public FamCanvasser: number;

  @Column('double', {
    nullable: true,
    name: 'fam_Latitude',
  })
  public FamLatitude: number | null;

  @Column('double', {
    nullable: true,
    name: 'fam_Longitude',
  })
  public FamLongitude: number | null;

  @Column('mediumint', {
    nullable: false,
    default: () => "'0'",
    name: 'fam_Envelope',
  })
  public FamEnvelope: number;
}
