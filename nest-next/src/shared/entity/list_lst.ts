import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("list_lst",{schema:"churchcrm" } )
export class ListLst {

    @PrimaryColumn("mediumint",{
        nullable:false,
        default: 0,
        name:"lst_ID"
        })
    LstID:number;


    @PrimaryColumn("mediumint",{
        nullable:false,
        default: 0,
        name:"lst_OptionID"
        })
    LstOptionID:number;


    @Column("tinyint",{
        nullable:false,
        default: 0,
        name:"lst_OptionSequence"
        })
    LstOptionSequence:number;


    @Column("varchar",{
        nullable:false,
        length:50,
        default: '',
        name:"lst_OptionName"
        })
    LstOptionName:string;

}
