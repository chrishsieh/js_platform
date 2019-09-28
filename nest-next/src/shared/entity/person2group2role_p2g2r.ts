import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { GroupGrp } from './group_grp';
import { PersonPer } from './person_per';

@Entity('person2group2role_p2g2r', { schema: 'churchcrm' })
@Index('p2g2r_per_ID', ['P2G2rPerID', 'P2G2rGrpID', 'P2G2rRleID'])
export class Person2group2roleP2G2r {
  @Column('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'p2g2r_per_ID',
  })
  public P2G2rPerID: number;

  @ManyToOne((type) => PersonPer, (person) => person.P2G2r)
  @JoinColumn({ name: 'p2g2r_per_ID' })
  public PerID: PersonPer;

  @Column('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'p2g2r_grp_ID',
  })
  public P2G2rGrpID: number;

  @ManyToOne((type) => GroupGrp, (group) => group.P2G2r)
  @JoinColumn({ name: 'p2g2r_grp_ID' })
  public GrpID: GroupGrp;

  @PrimaryColumn('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'p2g2r_rle_ID',
  })
  public P2G2rRleID: number;
}
