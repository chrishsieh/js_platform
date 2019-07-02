import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("kioskdevice_kdev",{schema:"churchcrm" } )
@Index("kdev_ID",["kdev_ID",],{unique:true})
export class kioskdevice_kdev {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"kdev_ID"
        })
    kdev_ID:number;
        

    @Column("char",{ 
        nullable:true,
        length:64,
        name:"kdev_GUIDHash"
        })
    kdev_GUIDHash:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"kdev_Name"
        })
    kdev_Name:string | null;
        

    @Column("mediumint",{ 
        nullable:false,
        default: () => "'0'",
        name:"kdev_deviceType"
        })
    kdev_deviceType:number;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"kdev_lastHeartbeat"
        })
    kdev_lastHeartbeat:Date;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"kdev_Accepted"
        })
    kdev_Accepted:boolean | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"kdev_PendingCommands"
        })
    kdev_PendingCommands:string | null;
        
}
