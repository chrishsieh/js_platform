import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("volunteeropportunity_vol",{schema:"churchcrm" } )
@Index("vol_ID",["vol_ID",],{unique:true})
export class volunteeropportunity_vol {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"vol_ID"
        })
    vol_ID:number;
        

    @Column("int",{ 
        nullable:false,
        default: () => "'0'",
        name:"vol_Order"
        })
    vol_Order:number;
        

    @Column("enum",{ 
        nullable:false,
        default: () => "'true'",
        enum:["true","false"],
        name:"vol_Active"
        })
    vol_Active:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"vol_Name"
        })
    vol_Name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"vol_Description"
        })
    vol_Description:string | null;
        
}
