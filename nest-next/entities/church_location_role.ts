import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("church_location_role",{schema:"churchcrm" } )
export class church_location_role {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"location_id"
        })
    location_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"role_id"
        })
    role_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"role_order"
        })
    role_order:number;
        

    @Column("int",{ 
        nullable:false,
        name:"role_title"
        })
    role_title:number;
        
}
