import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("pledge_plg",{schema:"churchcrm" } )
export class pledge_plg {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"plg_plgID"
        })
    plg_plgID:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"plg_FamID"
        })
    plg_FamID:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"plg_FYID"
        })
    plg_FYID:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"plg_date"
        })
    plg_date:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"plg_amount"
        })
    plg_amount:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["Weekly","Monthly","Quarterly","Once","Other"],
        name:"plg_schedule"
        })
    plg_schedule:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["CREDITCARD","CHECK","CASH","BANKDRAFT","EGIVE"],
        name:"plg_method"
        })
    plg_method:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"plg_comment"
        })
    plg_comment:string | null;
        

    @Column("date",{ 
        nullable:false,
        default: () => "'2016-01-01'",
        name:"plg_DateLastEdited"
        })
    plg_DateLastEdited:string;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"plg_EditedBy"
        })
    plg_EditedBy:number;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'Pledge'",
        enum:["Pledge","Payment"],
        name:"plg_PledgeOrPayment"
        })
    plg_PledgeOrPayment:string;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"plg_fundID"
        })
    plg_fundID:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"plg_depID"
        })
    plg_depID:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"plg_CheckNo"
        })
    plg_CheckNo:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"plg_Problem"
        })
    plg_Problem:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"plg_scanString"
        })
    plg_scanString:string | null;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"plg_aut_ID"
        })
    plg_aut_ID:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"plg_aut_Cleared"
        })
    plg_aut_Cleared:boolean;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"plg_aut_ResultID"
        })
    plg_aut_ResultID:number;
        

    @Column("decimal",{ 
        nullable:false,
        precision:8,
        scale:2,
        name:"plg_NonDeductible"
        })
    plg_NonDeductible:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        name:"plg_GroupKey"
        })
    plg_GroupKey:string;
        
}
