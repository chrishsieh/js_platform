import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("fundraiser_fr",{schema:"churchcrm" } )
@Index("fr_ID",["fr_ID",],{unique:true})
export class fundraiser_fr {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"fr_ID"
        })
    fr_ID:number;
        

    @Column("date",{ 
        nullable:true,
        name:"fr_date"
        })
    fr_date:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"fr_title"
        })
    fr_title:string;
        

    @Column("text",{ 
        nullable:true,
        name:"fr_description"
        })
    fr_description:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "'0'",
        name:"fr_EnteredBy"
        })
    fr_EnteredBy:number;
        

    @Column("date",{ 
        nullable:false,
        name:"fr_EnteredDate"
        })
    fr_EnteredDate:string;
        
}
