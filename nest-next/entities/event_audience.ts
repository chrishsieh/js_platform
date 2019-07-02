import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("event_audience",{schema:"churchcrm" } )
export class event_audience {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"event_id"
        })
    event_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"group_id"
        })
    group_id:number;
        
}
