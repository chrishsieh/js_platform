import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("user_usr",{schema:"churchcrm" } )
@Index("usr_UserName",["usr_UserName",],{unique:true})
@Index("usr_apiKey_unique",["usr_apiKey",],{unique:true})
@Index("usr_per_ID",["usr_per_ID",])
export class user_usr {

    @Column("mediumint",{
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"usr_per_ID"
        })
    usr_per_ID:number;


    @Column("varchar",{
        nullable:false,
        length:500,
        default: () => "''",
        name:"usr_Password"
        })
    usr_Password:string;


    @Column("tinyint",{
        nullable:false,
        default: () => "'1'",
        name:"usr_NeedPasswordChange"
        })
    usr_NeedPasswordChange:number;


    @Column("datetime",{
        nullable:false,
        default: () => "'2016-01-01 00:00:00'",
        name:"usr_LastLogin"
        })
    usr_LastLogin:Date;


    @Column("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_LoginCount"
        })
    usr_LoginCount:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_FailedLogins"
        })
    usr_FailedLogins:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_AddRecords"
        })
    usr_AddRecords:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_EditRecords"
        })
    usr_EditRecords:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_DeleteRecords"
        })
    usr_DeleteRecords:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_MenuOptions"
        })
    usr_MenuOptions:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_ManageGroups"
        })
    usr_ManageGroups:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_Finance"
        })
    usr_Finance:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_Communication"
        })
    usr_Communication:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_Notes"
        })
    usr_Notes:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_Admin"
        })
    usr_Admin:number;


    @Column("smallint",{
        nullable:true,
        name:"usr_Workspacewidth"
        })
    usr_Workspacewidth:number | null;


    @Column("tinyint",{
        nullable:true,
        name:"usr_BaseFontSize"
        })
    usr_BaseFontSize:number | null;


    @Column("tinyint",{
        nullable:true,
        default: () => "'10'",
        name:"usr_SearchLimit"
        })
    usr_SearchLimit:number | null;


    @Column("varchar",{
        nullable:true,
        length:50,
        default: () => "'Style.css'",
        name:"usr_Style"
        })
    usr_Style:string | null;


    @Column("tinyint",{
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"usr_showPledges"
        })
    usr_showPledges:boolean;


    @Column("tinyint",{
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"usr_showPayments"
        })
    usr_showPayments:boolean;


    @Column("date",{
        nullable:false,
        default: () => "'2016-01-01'",
        name:"usr_showSince"
        })
    usr_showSince:string;


    @Column("mediumint",{
        nullable:false,
        default: () => "'10'",
        name:"usr_defaultFY"
        })
    usr_defaultFY:number;


    @Column("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_currentDeposit"
        })
    usr_currentDeposit:number;


    @Column("varchar",{
        nullable:true,
        unique: true,
        length:32,
        name:"usr_UserName"
        })
    usr_UserName:string | null;


    @Column("varchar",{
        nullable:true,
        unique: true,
        name:"usr_apiKey"
        })
    usr_apiKey:string | null;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_EditSelf"
        })
    usr_EditSelf:number;


    @Column("date",{
        nullable:true,
        name:"usr_CalStart"
        })
    usr_CalStart:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalEnd"
        })
    usr_CalEnd:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool1"
        })
    usr_CalNoSchool1:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool2"
        })
    usr_CalNoSchool2:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool3"
        })
    usr_CalNoSchool3:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool4"
        })
    usr_CalNoSchool4:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool5"
        })
    usr_CalNoSchool5:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool6"
        })
    usr_CalNoSchool6:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool7"
        })
    usr_CalNoSchool7:string | null;


    @Column("date",{
        nullable:true,
        name:"usr_CalNoSchool8"
        })
    usr_CalNoSchool8:string | null;


    @Column("tinyint",{
        nullable:true,
        name:"usr_SearchFamily"
        })
    usr_SearchFamily:number | null;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"usr_Canvasser"
        })
    usr_Canvasser:number;

}
