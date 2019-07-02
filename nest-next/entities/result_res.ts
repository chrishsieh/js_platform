import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("result_res",{schema:"churchcrm" } )
export class result_res {

    @PrimaryGeneratedColumn({
        type:"mediumint", 
        name:"res_ID"
        })
    res_ID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"res_echotype1"
        })
    res_echotype1:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_echotype2"
        })
    res_echotype2:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_echotype3"
        })
    res_echotype3:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_authorization"
        })
    res_authorization:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_order_number"
        })
    res_order_number:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_reference"
        })
    res_reference:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_status"
        })
    res_status:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_avs_result"
        })
    res_avs_result:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_security_result"
        })
    res_security_result:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_mac"
        })
    res_mac:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_decline_code"
        })
    res_decline_code:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_tran_date"
        })
    res_tran_date:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_merchant_name"
        })
    res_merchant_name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_version"
        })
    res_version:string;
        

    @Column("text",{ 
        nullable:false,
        name:"res_EchoServer"
        })
    res_EchoServer:string;
        
}
