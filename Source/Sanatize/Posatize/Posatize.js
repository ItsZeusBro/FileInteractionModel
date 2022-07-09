import { BIT, KBIT, MBIT, GBIT, TBIT, PBIT, EBIT, MID, BEG, END} from "../../GoodyBag/GoodyBag.js";
import {ANYTHING_SCIENTIFIC} from "../../../MagicSpells/MagicSpells.js"
export class Posatize{
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.binalities = {
            "bit":BIT,"kbit":KBIT,"mbit":MBIT, "gbit":GBIT, "tbit":TBIT, "pbit":PBIT, "ebit":EBIT,
            "mid":MID, "beg":BEG, "end":END
        };
        this.ality=/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bit|kbit|mbit|gbit|tbit|pbit|ebit))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bit|kbit|mbit|gbit|tbit|pbit|ebit)))?)*)/g;
    }
    sanat(ality){
        return this.anchorize(this.bin(this.scient(ality)))
    }
    scient(ality){
        var spacedOut=ality.split(' ').join('');
        var alityReg = new RegExp(this.ality);
        ality = spacedOut.match(alityReg)[0];
        var reg= new RegExp(ANYTHING_SCIENTIFIC)
        if(reg.exec(ality)){
            reg.exec(ality).forEach(scientality => {
                if(JSON.stringify(new Number(scientality))){
                    ality = ality.replace(reg, new Number(scientality)) //replaces the next scientity regex match for a number
                }
            });
        }
        return ality
    }
    bin(ality){
        console.log(ality)
    }
    anchorize(){

    }
}
