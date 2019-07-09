import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("whycame_why",{schema:"churchcrm" } )
export class whycame_why {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"why_ID"
        })
    why_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"why_per_ID"
        })
    why_per_ID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"why_join"
        })
    why_join:string;
        

    @Column("text",{ 
        nullable:false,
        name:"why_come"
        })
    why_come:string;
        

    @Column("text",{ 
        nullable:false,
        name:"why_suggest"
        })
    why_suggest:string;
        

    @Column("text",{ 
        nullable:false,
        name:"why_hearOfUs"
        })
    why_hearOfUs:string;
        
}
