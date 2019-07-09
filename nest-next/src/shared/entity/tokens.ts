import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tokens",{schema:"churchcrm" } )
export class tokens {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:99,
        name:"token"
        })
    token:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"type"
        })
    type:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"reference_id"
        })
    reference_id:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"valid_until_date"
        })
    valid_until_date:Date | null;
        

    @Column("int",{ 
        nullable:true,
        name:"remainingUses"
        })
    remainingUses:number | null;
        
}
