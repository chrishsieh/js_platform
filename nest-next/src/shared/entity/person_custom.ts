import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("person_custom",{schema:"churchcrm" } )
export class person_custom {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"per_ID"
        })
    per_ID:number;
        
}
