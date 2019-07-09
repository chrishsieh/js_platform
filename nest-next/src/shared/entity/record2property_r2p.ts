import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("record2property_r2p",{schema:"churchcrm" } )
export class record2property_r2p {

    @PrimaryColumn("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"r2p_pro_ID"
        })
    r2p_pro_ID:number;


    @Column("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"r2p_record_ID"
        })
    r2p_record_ID:number;


    @Column("text",{
        nullable:false,
        name:"r2p_Value"
        })
    r2p_Value:string;

}
