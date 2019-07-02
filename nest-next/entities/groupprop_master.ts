import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("groupprop_master",{schema:"churchcrm" } )
export class groupprop_master {

    @PrimaryColumn("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"grp_ID"
        })
    grp_ID:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"prop_ID"
        })
    prop_ID:number;


    @Column("varchar",{
        nullable:false,
        length:5,
        default: () => "'0'",
        name:"prop_Field"
        })
    prop_Field:string;


    @Column("varchar",{
        nullable:true,
        length:40,
        name:"prop_Name"
        })
    prop_Name:string | null;


    @Column("varchar",{
        nullable:true,
        length:60,
        name:"prop_Description"
        })
    prop_Description:string | null;


    @Column("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"type_ID"
        })
    type_ID:number;


    @Column("mediumint",{
        nullable:true,
        name:"prop_Special"
        })
    prop_Special:number | null;


    @Column("enum",{
        nullable:false,
        default: () => "'false'",
        enum:["false","true"],
        name:"prop_PersonDisplay"
        })
    prop_PersonDisplay:string;

}
