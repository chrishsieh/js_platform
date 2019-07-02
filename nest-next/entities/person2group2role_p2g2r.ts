import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("person2group2role_p2g2r",{schema:"churchcrm" } )
@Index("p2g2r_per_ID",["p2g2r_per_ID","p2g2r_grp_ID","p2g2r_rle_ID",])
export class person2group2role_p2g2r {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"p2g2r_per_ID"
        })
    p2g2r_per_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"p2g2r_grp_ID"
        })
    p2g2r_grp_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"p2g2r_rle_ID"
        })
    p2g2r_rle_ID:number;
        
}
