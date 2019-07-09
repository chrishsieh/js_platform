import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("queryparameteroptions_qpo",{schema:"churchcrm" } )
@Index("qpo_ID",["qpo_ID",],{unique:true})
export class queryparameteroptions_qpo {

    @PrimaryGeneratedColumn({
        type:"smallint", 
        name:"qpo_ID"
        })
    qpo_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qpo_qrp_ID"
        })
    qpo_qrp_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "''",
        name:"qpo_Display"
        })
    qpo_Display:string;
        

    @Column("varchar",{ 
        nullable:false,
        default: () => "''",
        name:"qpo_Value"
        })
    qpo_Value:string;
        
}
