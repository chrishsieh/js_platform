import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("kioskassginment_kasm",{schema:"churchcrm" } )
@Index("kasm_ID",["kasm_ID",],{unique:true})
export class kioskassginment_kasm {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"kasm_ID"
        })
    kasm_ID:number;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"kasm_kdevId"
        })
    kasm_kdevId:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        name:"kasm_AssignmentType"
        })
    kasm_AssignmentType:number | null;
        

    @Column("mediumint",{ 
        nullable:true,
        default: () => "'0'",
        name:"kasm_EventId"
        })
    kasm_EventId:number | null;
        
}
