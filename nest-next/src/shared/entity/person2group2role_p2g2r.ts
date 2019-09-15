import { Column, Entity, Index, ManyToOne, PrimaryColumn } from 'typeorm';
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

  @ManyToOne(() => PersonPer, (PersonID) => PersonID.P2G2r)
  public PersonID: PersonPer;

  @Column('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'p2g2r_grp_ID',
  })
  public P2G2rGrpID: number;

  @PrimaryColumn('mediumint', {
    nullable: false,
    default: () => '\'0\'',
    name: 'p2g2r_rle_ID',
  })
  public P2G2rRleID: number;
}
