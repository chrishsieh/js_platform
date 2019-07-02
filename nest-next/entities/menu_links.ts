import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("menu_links",{schema:"churchcrm" } )
export class menu_links {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"linkId"
        })
    linkId:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"linkName"
        })
    linkName:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"linkUri"
        })
    linkUri:string;
        

    @Column("int",{ 
        nullable:false,
        name:"linkOrder"
        })
    linkOrder:number;
        
}
