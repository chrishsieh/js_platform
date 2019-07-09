import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("propertytype_prt",{schema:"churchcrm" } )
@Index("prt_ID",["prt_ID",],{unique:true})
@Index("prt_ID_2",["prt_ID",])
export class propertytype_prt {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"prt_ID"
        })
    prt_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        default: () => "''",
        name:"prt_Class"
        })
    prt_Class:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default: () => "''",
        name:"prt_Name"
        })
    prt_Name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"prt_Description"
        })
    prt_Description:string;
        
}
