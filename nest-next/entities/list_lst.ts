import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("list_lst",{schema:"churchcrm" } )
export class list_lst {

    @PrimaryColumn("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"lst_ID"
        })
    lst_ID:number;


    @Column("mediumint",{
        nullable:false,
        default: () => "'0'",
        name:"lst_OptionID"
        })
    lst_OptionID:number;


    @Column("tinyint",{
        nullable:false,
        default: () => "'0'",
        name:"lst_OptionSequence"
        })
    lst_OptionSequence:number;


    @Column("varchar",{
        nullable:false,
        length:50,
        default: () => "''",
        name:"lst_OptionName"
        })
    lst_OptionName:string;

}
