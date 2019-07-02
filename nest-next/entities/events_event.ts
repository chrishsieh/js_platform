import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("events_event",{schema:"churchcrm" } )
export class events_event {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"event_id"
        })
    event_id:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"event_type"
        })
    event_type:number;
        

    @Column("varchar",{ 
        nullable:false,
        default: () => "''",
        name:"event_title"
        })
    event_title:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"event_desc"
        })
    event_desc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"event_text"
        })
    event_text:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        name:"event_start"
        })
    event_start:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"event_end"
        })
    event_end:Date;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"inactive"
        })
    inactive:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        default: () => "''",
        name:"event_typename"
        })
    event_typename:string;
        

    @Column("int",{ 
        nullable:true,
        name:"location_id"
        })
    location_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"secondary_contact_person_id"
        })
    secondary_contact_person_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"primary_contact_person_id"
        })
    primary_contact_person_id:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"event_url"
        })
    event_url:string | null;
        
}
