import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("calendars",{schema:"churchcrm" } )
export class calendars {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"calendar_id"
        })
    calendar_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:99,
        name:"accesstoken"
        })
    accesstoken:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:6,
        name:"foregroundColor"
        })
    foregroundColor:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:6,
        name:"backgroundColor"
        })
    backgroundColor:string | null;
        
}
