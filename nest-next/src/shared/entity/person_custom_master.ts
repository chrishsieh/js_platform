import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("person_custom_master",{schema:"churchcrm" } )
export class person_custom_master {

    @Column("smallint",{ 
        nullable:false,
        default: () => "'0'",
        name:"custom_Order"
        })
    custom_Order:number;
        

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:5,
        default: () => "''",
        name:"custom_Field"
        })
    custom_Field:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        default: () => "''",
        name:"custom_Name"
        })
    custom_Name:string;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"custom_Special"
        })
    custom_Special:number | null;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'left'",
        enum:["left","right"],
        name:"custom_Side"
        })
    custom_Side:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"custom_FieldSec"
        })
    custom_FieldSec:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"type_ID"
        })
    type_ID:number;
        
}
