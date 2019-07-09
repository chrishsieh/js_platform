import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("canvassdata_can",{schema:"churchcrm" } )
@Index("can_ID",["can_ID",],{unique:true})
export class canvassdata_can {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"can_ID"
        })
    can_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"can_famID"
        })
    can_famID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"can_Canvasser"
        })
    can_Canvasser:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"can_FYID"
        })
    can_FYID:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"can_date"
        })
    can_date:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"can_Positive"
        })
    can_Positive:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"can_Critical"
        })
    can_Critical:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"can_Insightful"
        })
    can_Insightful:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"can_Financial"
        })
    can_Financial:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"can_Suggestion"
        })
    can_Suggestion:string | null;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default: () => "'0'",
        name:"can_NotInterested"
        })
    can_NotInterested:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"can_WhyNotInterested"
        })
    can_WhyNotInterested:string | null;
        
}
