import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupGrp } from './group_grp';
import { PersonPer } from './person_per';

@Entity('person2group2role_p2g2r', { schema: 'churchcrm' })
export class Person2group2roleP2G2r {
  @PrimaryColumn('mediumint', {
    nullable: false,
    default: 0,
    width: 8,
    unsigned: true,
    name: 'p2g2r_per_ID',
  })
  public P2G2rPerID: number;

  @PrimaryColumn('mediumint', {
    nullable: false,
    default: 0,
    width: 8,
    unsigned: true,
    name: 'p2g2r_grp_ID',
  })
  public P2G2rGrpID: number;

  @PrimaryColumn('mediumint', {
    nullable: false,
    default: 0,
    width: 8,
    unsigned: true,
    name: 'p2g2r_rle_ID',
  })
  public P2G2rRleID: number;
}
