import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("multibuy_mb",{schema:"churchcrm" } )
@Index("mb_ID",["mb_ID",],{unique:true})
export class multibuy_mb {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"mb_ID"
        })
    mb_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"mb_per_ID"
        })
    mb_per_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"mb_item_ID"
        })
    mb_item_ID:number;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:0,
        name:"mb_count"
        })
    mb_count:string | null;
        
}
