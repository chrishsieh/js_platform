import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("version_ver",{schema:"churchcrm" } )
@Index("ver_version",["ver_version",],{unique:true})
export class version_ver {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"ver_ID"
        })
    ver_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        default: () => "''",
        name:"ver_version"
        })
    ver_version:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"ver_update_start"
        })
    ver_update_start:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"ver_update_end"
        })
    ver_update_end:Date | null;
        
}
