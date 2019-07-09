import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("event_types",{schema:"churchcrm" } )
export class event_types {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"type_id"
        })
    type_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        default: () => "''",
        name:"type_name"
        })
    type_name:string;
        

    @Column("time",{ 
        nullable:false,
        default: () => "'00:00:00'",
        name:"type_defstarttime"
        })
    type_defstarttime:string;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'none'",
        enum:["none","weekly","monthly","yearly"],
        name:"type_defrecurtype"
        })
    type_defrecurtype:string;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'Sunday'",
        enum:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        name:"type_defrecurDOW"
        })
    type_defrecurDOW:string;
        

    @Column("char",{ 
        nullable:false,
        length:2,
        default: () => "'0'",
        name:"type_defrecurDOM"
        })
    type_defrecurDOM:string;
        

    @Column("date",{ 
        nullable:false,
        default: () => "'2016-01-01'",
        name:"type_defrecurDOY"
        })
    type_defrecurDOY:string;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'1'",
        name:"type_active"
        })
    type_active:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"type_grpid"
        })
    type_grpid:number | null;
        
}
