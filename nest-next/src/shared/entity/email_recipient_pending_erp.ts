import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("email_recipient_pending_erp",{schema:"churchcrm" } )
export class email_recipient_pending_erp {

    @PrimaryColumn("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"erp_id"
        })
    erp_id:number;


    @Column("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"erp_usr_id"
        })
    erp_usr_id:number;


    @Column("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"erp_num_attempt"
        })
    erp_num_attempt:number;


    @Column("datetime",{
        nullable:true,
        name:"erp_failed_time"
        })
    erp_failed_time:Date | null;


    @Column("varchar",{
        nullable:false,
        length:50,
        default: () => "''",
        name:"erp_email_address"
        })
    erp_email_address:string;

}
