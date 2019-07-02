import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("group_grp",{schema:"churchcrm" } )
@Index("grp_ID",["grp_ID",],{unique:true})
@Index("grp_ID_2",["grp_ID",])
export class group_grp {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"grp_ID"
        })
    grp_ID:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"grp_Type"
        })
    grp_Type:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"grp_RoleListID"
        })
    grp_RoleListID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"grp_DefaultRole"
        })
    grp_DefaultRole:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "''",
        name:"grp_Name"
        })
    grp_Name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"grp_Description"
        })
    grp_Description:string | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"grp_hasSpecialProps"
        })
    grp_hasSpecialProps:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'1'",
        name:"grp_active"
        })
    grp_active:boolean;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'1'",
        name:"grp_include_email_export"
        })
    grp_include_email_export:boolean;
        
}
