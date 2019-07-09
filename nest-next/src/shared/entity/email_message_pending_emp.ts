import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("email_message_pending_emp",{schema:"churchcrm" } )
export class email_message_pending_emp {

    @PrimaryColumn("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"emp_usr_id"
        })
    emp_usr_id:number;


    @Column("smallint",{
        nullable:false,
        default: () => "'0'",
        name:"emp_to_send"
        })
    emp_to_send:number;


    @Column("varchar",{
        nullable:false,
        length:128,
        name:"emp_subject"
        })
    emp_subject:string;


    @Column("text",{
        nullable:false,
        name:"emp_message"
        })
    emp_message:string;


    @Column("text",{
        nullable:true,
        name:"emp_attach_name"
        })
    emp_attach_name:string | null;


    @Column("tinyint",{
        nullable:true,
        width:1,
        name:"emp_attach"
        })
    emp_attach:boolean | null;

}
