import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("istlookup_lu",{schema:"churchcrm" } )
export class istlookup_lu {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"lu_fam_ID"
        })
    lu_fam_ID:number;
        

    @Column("datetime",{ 
        nullable:false,
        default: () => "'2016-01-01 00:00:00'",
        name:"lu_LookupDateTime"
        })
    lu_LookupDateTime:Date;
        

    @Column("varchar",{ 
        nullable:true,
        name:"lu_DeliveryLine1"
        })
    lu_DeliveryLine1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"lu_DeliveryLine2"
        })
    lu_DeliveryLine2:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"lu_City"
        })
    lu_City:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"lu_State"
        })
    lu_State:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"lu_ZipAddon"
        })
    lu_ZipAddon:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_Zip"
        })
    lu_Zip:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_Addon"
        })
    lu_Addon:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_LOTNumber"
        })
    lu_LOTNumber:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_DPCCheckdigit"
        })
    lu_DPCCheckdigit:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_RecordType"
        })
    lu_RecordType:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"lu_LastLine"
        })
    lu_LastLine:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_CarrierRoute"
        })
    lu_CarrierRoute:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_ReturnCodes"
        })
    lu_ReturnCodes:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"lu_ErrorCodes"
        })
    lu_ErrorCodes:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"lu_ErrorDesc"
        })
    lu_ErrorDesc:string | null;
        
}
