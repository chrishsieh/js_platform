import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group_grp', { schema: 'churchcrm' })
@Index('grp_ID', ['GrpID'], { unique: true })
@Index('grp_ID_2', ['GrpID'])
export class GroupGrp {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
    name: 'grp_ID',
  })
  public GrpID: number;

  @Column('tinyint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'grp_Type',
  })
  public GrpType: number;

  @Column('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'grp_RoleListID',
  })
  public GrpRoleListID: number;

  @Column('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'grp_DefaultRole',
  })
  public GrpDefaultRole: number;

  @Column('varchar', {
    nullable: false,
    length: 50,
    default: () => '\'\'',
    name: 'grp_Name',
  })
  public GrpName: string;

  @Column('text', {
    nullable: true,
    name: 'grp_Description',
  })
  public GrpDescription: string | null;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: () => '\'0\'',
    name: 'grp_hasSpecialProps',
  })
  public GrpHasSpecialProps: boolean;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: () => '\'1\'',
    name: 'grp_active',
  })
  public GrpActive: boolean;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: () => '\'1\'',
    name: 'grp_include_email_export',
  })
  public GrpIncludeEmailExport: boolean;
}
