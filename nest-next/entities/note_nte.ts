import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("note_nte",{schema:"churchcrm" } )
export class note_nte {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"nte_ID"
        })
    nte_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"nte_per_ID"
        })
    nte_per_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"nte_fam_ID"
        })
    nte_fam_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"nte_Private"
        })
    nte_Private:number;
        

    @Column("text",{ 
        nullable:true,
        name:"nte_Text"
        })
    nte_Text:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        name:"nte_DateEntered"
        })
    nte_DateEntered:Date;
        

    @Column("datetime",{ 
        nullable:true,
        name:"nte_DateLastEdited"
        })
    nte_DateLastEdited:Date | null;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"nte_EnteredBy"
        })
    nte_EnteredBy:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"nte_EditedBy"
        })
    nte_EditedBy:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"nte_Type"
        })
    nte_Type:string | null;
        
}
