import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("event_attend",{schema:"churchcrm" } )
@Index("event_id",["event_id","person_id",],{unique:true})
export class event_attend {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"attend_id"
        })
    attend_id:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"event_id"
        })
    event_id:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"person_id"
        })
    person_id:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"checkin_date"
        })
    checkin_date:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"checkin_id"
        })
    checkin_id:number | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"checkout_date"
        })
    checkout_date:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"checkout_id"
        })
    checkout_id:number | null;
        
}
