import { Column, Entity, Generated, Index, PrimaryColumn } from 'typeorm';

@Entity('group_grp', { schema: 'churchcrm' })
@Index('grp_ID', ['GrpID'], { unique: true })
@Index('grp_ID_2', ['GrpID'])
export class GroupGrp {
  @Generated('increment')
  @PrimaryColumn({
    type: 'mediumint',
    name: 'grp_ID',
    width: 8,
    unsigned: true,
  })
  public GrpID: number;

  @Column('tinyint', {
    nullable: false,
    default: 0,
    width: 4,
    name: 'grp_Type',
  })
  public GrpType: number;

  @Column('mediumint', {
    nullable: false,
    default: 0,
    width: 8,
    unsigned: true,
    name: 'grp_RoleListID',
  })
  public GrpRoleListID: number;

  @Column('mediumint', {
    nullable: false,
    default: 0,
    width: 9,
    name: 'grp_DefaultRole',
  })
  public GrpDefaultRole: number;

  @Column('varchar', {
    nullable: false,
    length: 50,
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
    default: 0,
    name: 'grp_hasSpecialProps',
  })
  public GrpHasSpecialProps: boolean;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: 1,
    name: 'grp_active',
  })
  public GrpActive: boolean;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: 1,
    name: 'grp_include_email_export',
  })
  public GrpIncludeEmailExport: boolean;
}
