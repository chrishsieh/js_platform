import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("family_custom_master",{schema:"churchcrm" } )
export class family_custom_master {

    @PrimaryColumn("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"fam_custom_Order"
        })
    fam_custom_Order:number;


    @Column("varchar",{
        nullable:false,
        length:5,
        default: () => "''",
        name:"fam_custom_Field"
        })
    fam_custom_Field:string;


    @Column("varchar",{
        nullable:false,
        length:40,
        default: () => "''",
        name:"fam_custom_Name"
        })
    fam_custom_Name:string;


    @Column("mediumint",{
        nullable:true,
        name:"fam_custom_Special"
        })
    fam_custom_Special:number | null;


    @Column("enum",{
        nullable:false,
        default: () => "'left'",
        enum:["left","right"],
        name:"fam_custom_Side"
        })
    fam_custom_Side:string;


    @Column("tinyint",{
        nullable:false,
        default: () => "'1'",
        name:"fam_custom_FieldSec"
        })
    fam_custom_FieldSec:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"type_ID"
        })
    type_ID:number;

}
