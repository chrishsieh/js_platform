import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("calendar_events",{schema:"churchcrm" } )
export class calendar_events {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"calendar_id"
        })
    calendar_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"event_id"
        })
    event_id:number;
        
}
