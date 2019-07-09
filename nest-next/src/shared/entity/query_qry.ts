import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("query_qry",{schema:"churchcrm" } )
@Index("qry_ID",["qry_ID",],{unique:true})
@Index("qry_ID_2",["qry_ID",])
export class query_qry {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"qry_ID"
        })
    qry_ID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"qry_SQL"
        })
    qry_SQL:string;
        

    @Column("varchar",{ 
        nullable:false,
        default: () => "''",
        name:"qry_Name"
        })
    qry_Name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"qry_Description"
        })
    qry_Description:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"qry_Count"
        })
    qry_Count:number;
        
}
