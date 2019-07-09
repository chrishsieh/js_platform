import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userconfig_ucfg",{schema:"churchcrm" } )
export class userconfig_ucfg {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        name:"ucfg_per_id"
        })
    ucfg_per_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"ucfg_id"
        })
    ucfg_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "''",
        name:"ucfg_name"
        })
    ucfg_name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"ucfg_value"
        })
    ucfg_value:string | null;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'text'",
        enum:["text","number","date","boolean","textarea"],
        name:"ucfg_type"
        })
    ucfg_type:string;
        

    @Column("text",{ 
        nullable:false,
        name:"ucfg_tooltip"
        })
    ucfg_tooltip:string;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'FALSE'",
        enum:["FALSE","TRUE"],
        name:"ucfg_permission"
        })
    ucfg_permission:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"ucfg_cat"
        })
    ucfg_cat:string;
        
}
