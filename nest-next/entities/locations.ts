import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("locations",{schema:"churchcrm" } )
export class locations {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"location_id"
        })
    location_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"location_typeId"
        })
    location_typeId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:256,
        name:"location_name"
        })
    location_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"location_address"
        })
    location_address:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"location_city"
        })
    location_city:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"location_state"
        })
    location_state:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"location_zip"
        })
    location_zip:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"location_country"
        })
    location_country:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"location_phone"
        })
    location_phone:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"location_email"
        })
    location_email:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"location_timzezone"
        })
    location_timzezone:string | null;
        
}
