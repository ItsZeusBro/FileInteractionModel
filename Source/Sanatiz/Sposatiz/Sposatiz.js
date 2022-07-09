import { BIN, NIB, B, MB, GB, TB, PB, EB, MID, BEG, END} from "../../GoodyBag/GoodyBag.js";
import {ANYTHING_SCIENTIFIC} from "../../../MagicSpells/MagicSpells.js"
export class Sposatiz{
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.ity = {
            "bin":BIN, "nib":NIB, "b":B, "mb":MB,
            "gb":GB, "tb":TB, "pb":PB, "eb":EB,
            "mid":MID, "beg":BEG, "end":END
        };
        this.ality=/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g;
    }
    sanatiz(ality){
        ality = this.tokity(this.re(ality)['match']);
        return this.evaluate(ality)
    }

    re(ality){
        var spacedOut=ality.split(' ').join('');
        var alityReg = new RegExp(this.ality);
        return {"match":spacedOut.match(alityReg)[0], "spacedout":spacedOut, "original":ality};
    }

    tokity(ality){
        for (const [tok, ity] of Object.entries(this.ity)){

            ality = ality.replaceAll(tok, '+'+ity)

        }
        var reg= new RegExp(ANYTHING_SCIENTIFIC)
        if(reg.exec(ality)){
            reg.exec(ality).forEach(scientity => {
                if(JSON.stringify(new Number(scientity))){
                    
                    ality = ality.replace(reg, new Number(scientity)) //replaces the next scientity regex match for a number
                }
            });
        }
        return ality
    }
    evaluate(ality){
        return ality
    }
}
