import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eventcountnames_evctnm",{schema:"churchcrm" } )
@Index("evctnm_countid",["evctnm_countid",],{unique:true})
@Index("evctnm_eventtypeid",["evctnm_eventtypeid","evctnm_countname",],{unique:true})
export class eventcountnames_evctnm {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"evctnm_countid"
        })
    evctnm_countid:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "'0'",
        name:"evctnm_eventtypeid"
        })
    evctnm_eventtypeid:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        default: () => "''",
        name:"evctnm_countname"
        })
    evctnm_countname:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        default: () => "''",
        name:"evctnm_notes"
        })
    evctnm_notes:string;
        
}
