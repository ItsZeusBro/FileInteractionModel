import { BIT, KBIT, MBIT, GBIT, TBIT, PBIT, EBIT, MID, BEG, END} from "../../../GoodyBag/GoodyBag.js";
import {ANYTHING_SCIENTIFIC} from "../../../../../MagicSpells/MagicSpells.js";
import {Clus_} from "../Clusivity_/Clus_.js";
import {Quan_} from "../Quantality_/Quan_.js"
import {Position_} from "../Positionality_/Position_.js"

export class Sanatize_{
    constructor(){
        this.binalities = {
            "bit":BIT,"kbit":KBIT,"mbit":MBIT, "gbit":GBIT, "tbit":TBIT, "pbit":PBIT, "ebit":EBIT,
            "mid":MID, "beg":BEG, "end":END
        };
        this.Clus_= new Clus_();
        this.Quan_= new Quan_();
        this.Position_= new Position_();
        
    }
    sanatize(sPosaQuanaClus, context){
        sPosaQuanaClus = this.regularize(sPosaQuanaClus, context);
    }
    binatize(){
        
    }
    regularize(sPosaQuanaClus, context){
        if (context == 'positionality'){
            return this.binatize(this.scientize(this.match(this.Position_.ality, sPosaQuanaClus, context)));
        }else if (context == 'quantality'){
            return this.binatize(this.scientize(this.match(this.Quan_.tality, sPosaQuanaClus, context)));
        }else if (context == 'clusivity'){
            return this.binatize(this.scientize(this.match(this.Clus_.ivity, sPosaQuanaClus, context)));
        }else{
            throw Error("invalid context for sanitizer")
        }
    }
    match(reg, sPosaQuanaClus, context){
        var reg = new RegExp(reg);
        var match;
        try{
            var spacedOut=sPosaQuanaClus.split(' ').join('');
            match = spacedOut.match(reg)[0];
        }catch{
            throw Error(context+" is not properly formatted");
        }
        return match;
    }
    scientize(sPosaQuanaClus){
        var spacedOut=sPosaQuanaClus.split(' ').join('');
        match = this.match(sPosaQuanaClus);
        var scientized;
        var reg= new RegExp(ANYTHING_SCIENTIFIC)
        try{
            reg.exec(match).forEach(scientality => {
                if(JSON.stringify(new Number(scientality))){
                    scientized = match.replace(reg, new Number(scientality))
                }
            });
            return scientized;
        }catch{
            return sPosaQuanaClus;
        }
    }
}