import { BIN, NIB, B, MB, GB, TB, PB, EB, E } from "../../GoodyBag/GoodyBag";
import {ANYTHING_SCIENTIFIC} from "../../../MagicSpells/MagicSpells.js"
export class Sposatiz{
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.tokens = {
            "bin":BIN, "nib":NIB, "b":B, "mb":MB,
            "gb":GB, "tb":TB, "pb":PB, "eb":EB,
            "mid":MID, "beg":BEG, "end":END, 'e':E
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
        for (const [tok, ity] of Object.entries(this.tokens)){
            ality.replaceAll(tok, ity)
        } 
        return ality
    }
    evaluate(ality){

    }
}
