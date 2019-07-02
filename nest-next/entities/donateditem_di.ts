import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("donateditem_di",{schema:"churchcrm" } )
@Index("di_ID",["di_ID",],{unique:true})
export class donateditem_di {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"di_ID"
        })
    di_ID:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:32,
        name:"di_item"
        })
    di_item:string;
        

    @Column("mediumint",{ 
        nullable:false,
        name:"di_FR_ID"
        })
    di_FR_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"di_donor_ID"
        })
    di_donor_ID:number;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"di_buyer_ID"
        })
    di_buyer_ID:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "'0'",
        name:"di_multibuy"
        })
    di_multibuy:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"di_title"
        })
    di_title:string;
        

    @Column("text",{ 
        nullable:true,
        name:"di_description"
        })
    di_description:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"di_sellprice"
        })
    di_sellprice:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"di_estprice"
        })
    di_estprice:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"di_minimum"
        })
    di_minimum:string | null;
        

    @Column("decimal",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"di_materialvalue"
        })
    di_materialvalue:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "'0'",
        name:"di_EnteredBy"
        })
    di_EnteredBy:number;
        

    @Column("date",{ 
        nullable:false,
        name:"di_EnteredDate"
        })
    di_EnteredDate:string;
        

    @Column("text",{ 
        nullable:true,
        name:"di_picture"
        })
    di_picture:string | null;
        
}
