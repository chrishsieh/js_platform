import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("deposit_dep",{schema:"churchcrm" } )
export class deposit_dep {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"dep_ID"
        })
    dep_ID:number;
        

    @Column("date",{ 
        nullable:true,
        name:"dep_Date"
        })
    dep_Date:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"dep_Comment"
        })
    dep_Comment:string | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"dep_EnteredBy"
        })
    dep_EnteredBy:number | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"dep_Closed"
        })
    dep_Closed:boolean;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'Bank'",
        enum:["Bank","CreditCard","BankDraft","eGive"],
        name:"dep_Type"
        })
    dep_Type:string;
        
}
