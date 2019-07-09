import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("family_custom",{schema:"churchcrm" } )
export class family_custom {

    @Column("mediumint",{ 
        nullable:false,
        primary:true,
        default: () => "'0'",
        name:"fam_ID"
        })
    fam_ID:number;
        
}
