import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("queryparameters_qrp",{schema:"churchcrm" } )
@Index("qrp_ID",["qrp_ID",],{unique:true})
@Index("qrp_ID_2",["qrp_ID",])
@Index("qrp_qry_ID",["qrp_qry_ID",])
export class queryparameters_qrp {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"qrp_ID"
        })
    qrp_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qrp_qry_ID"
        })
    qrp_qry_ID:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qrp_Type"
        })
    qrp_Type:number;
        

    @Column("text",{ 
        nullable:true,
        name:"qrp_OptionSQL"
        })
    qrp_OptionSQL:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:25,
        name:"qrp_Name"
        })
    qrp_Name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"qrp_Description"
        })
    qrp_Description:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:25,
        name:"qrp_Alias"
        })
    qrp_Alias:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:25,
        name:"qrp_Default"
        })
    qrp_Default:string | null;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qrp_Required"
        })
    qrp_Required:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qrp_InputBoxSize"
        })
    qrp_InputBoxSize:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:5,
        default: () => "''",
        name:"qrp_Validation"
        })
    qrp_Validation:string;
        

    @Column("int",{ 
        nullable:true,
        name:"qrp_NumericMax"
        })
    qrp_NumericMax:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"qrp_NumericMin"
        })
    qrp_NumericMin:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"qrp_AlphaMinLength"
        })
    qrp_AlphaMinLength:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"qrp_AlphaMaxLength"
        })
    qrp_AlphaMaxLength:number | null;
        
}
