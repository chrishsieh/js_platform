import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("person2volunteeropp_p2vo",{schema:"churchcrm" } )
@Index("p2vo_ID",["p2vo_ID",],{unique:true})
export class person2volunteeropp_p2vo {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"p2vo_ID"
        })
    p2vo_ID:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"p2vo_per_ID"
        })
    p2vo_per_ID:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"p2vo_vol_ID"
        })
    p2vo_vol_ID:number | null;
        
}
