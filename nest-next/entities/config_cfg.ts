import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("config_cfg",{schema:"churchcrm" } )
@Index("cfg_name",["cfg_name",],{unique:true})
@Index("cfg_id",["cfg_id",])
export class config_cfg {

    @Column("int",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"cfg_id"
        })
    cfg_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        default: () => "''",
        name:"cfg_name"
        })
    cfg_name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"cfg_value"
        })
    cfg_value:string | null;
        
}
