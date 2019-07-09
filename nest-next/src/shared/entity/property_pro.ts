import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("property_pro",{schema:"churchcrm" } )
@Index("pro_ID",["pro_ID",],{unique:true})
@Index("pro_ID_2",["pro_ID",])
export class property_pro {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"pro_ID"
        })
    pro_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        default: () => "''",
        name:"pro_Class"
        })
    pro_Class:string;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"pro_prt_ID"
        })
    pro_prt_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        default: () => "'0'",
        name:"pro_Name"
        })
    pro_Name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"pro_Description"
        })
    pro_Description:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"pro_Prompt"
        })
    pro_Prompt:string | null;
        
}
