import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("church_location_person",{schema:"churchcrm" } )
export class church_location_person {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"location_id"
        })
    location_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"person_id"
        })
    person_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"order"
        })
    order:number;
        

    @Column("int",{ 
        nullable:false,
        name:"person_location_role_id"
        })
    person_location_role_id:number;
        
}
