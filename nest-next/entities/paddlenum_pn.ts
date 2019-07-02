import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("paddlenum_pn",{schema:"churchcrm" } )
@Index("pn_ID",["pn_ID",],{unique:true})
export class paddlenum_pn {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"pn_ID"
        })
    pn_ID:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"pn_fr_ID"
        })
    pn_fr_ID:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"pn_Num"
        })
    pn_Num:number | null;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"pn_per_ID"
        })
    pn_per_ID:number;
        
}
