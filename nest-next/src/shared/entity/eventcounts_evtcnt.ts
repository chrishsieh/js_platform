import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eventcounts_evtcnt",{schema:"churchcrm" } )
export class eventcounts_evtcnt {

    @PrimaryColumn("int",{
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"evtcnt_eventid"
        })
    evtcnt_eventid:number;


    @Column("int",{
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"evtcnt_countid"
        })
    evtcnt_countid:number;


    @Column("varchar",{
        nullable:true,
        length:20,
        name:"evtcnt_countname"
        })
    evtcnt_countname:string | null;


    @Column("int",{
        nullable:true,
        name:"evtcnt_countcount"
        })
    evtcnt_countcount:number | null;


    @Column("varchar",{
        nullable:true,
        length:20,
        name:"evtcnt_notes"
        })
    evtcnt_notes:string | null;

}
