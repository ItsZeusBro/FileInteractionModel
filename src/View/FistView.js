//INTERFACE
import {Flow} from "../Controller/SexyTransactions/Flow/Flow.js";
import { Stream } from "../Controller/SexyTransactions/Stream/Stream.js";
import { Comet } from "../../Comet/Comet.js";
import {Fist} from "../../Fist.js";
import * as fs from "node:fs";

export class FistView extends Comet{
    constructor(){

    }
    
    flow(fist, tality="all", ivity="in", alityf="Inf", ality=""){
        
        // return new Flow().flow(
        //     this.check(fist), 
        //     this.cleanQuan(tality), 
        //     this.cleanClus(ivity), 
        //     this.cleanPosition(alityf), 
        //     this.cleanPosition(ality)
        // );
    }

    stream(fist, tality="", alityf="", ality=""){
        this.fist(fist);
        //this.cleanQuan(tality);
        //this.cleanPosition(alityf);
        //this.cleanPosition(ality);

        //return new Stream().stream(
        //     this.check(fist), 
        //     this.cleanQuan(tality),
        //     this.cleanPosition(alityf),
        //     this.cleanPosition(ality)
        // );
    }
    check(fist){
        console.log(process.cwd(), fist)
        if((fist != typeof Fist)&&(!this.checkpath(fist))){
            throw Error("You can only flow to another fist");
        }
    }

    quan(tality){
        this.comet(
            `accepts abstract "all" and 'half' strings, 
            abstract percentages, abstract integers paired 
            with b, mb, gb, etc.`
        )
        if(tality=='all' || tality=='All' || tality=='ALL'){
            return Number.INFINITY;
        }else if(tality=="Half"||tality=="HALF"||tality=="half"){
            return 0.50;
        }else if(Number.isInteger(tality)){
            return tality;
        }else if(this.isFloat(tality)){
            if(tality<1){
                return Number.parseFloat(tality).toFixed(2);
            }else{
                throw Error("float value must be less than 1")
            }
        }
        else{
            throw Error("Invalid Quantifier");
        }
    }

    clus(ivity){
        this.comet(
            `accepts abstract "all" and 'half' strings, 
            abstract percentages, abstract integers paired 
            with b, mb, gb, etc.`
        )
        var ivityObj = {}
        try{
            ivity = ivity.split(':');
            if(ivity[0]!='in' && ivity[0]!='ex'){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                );
            }else{
                ivityObj['inex']=ivity.pop(0)
            }
            if(!Number.isInteger(ivity[0])&&!Number.isInteger(ivity[1])){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                );
            }else{
                //this means they are integers
                ivityObj['n']=ivity[0];
                ivityObj['m']=ivity[1];
            }
        }catch{
            if(ivity!='in' && ivity!='ex' && ivity!=undefined){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                );
            }else if(ivity==undefined){
                ivityObj['inex']=undefined;
                ivityObj['n']=ivity;
                ivityObj['m']=undefined;
            }else{
                ivityObj['inex']=undefined;
                ivityObj['n']=undefined;
                ivityObj['m']=ivity;
            }
        }
        return ivityObj;
    }
    pos(at){
        this.comet(
            `cleanPosition() accepts 'at:b', 'at:e', 
            'b', 'e','at:n', n, or undefined`
        )

        if(Number.isInteger(at)){
            return at;
        }else{
            if(at==('b'|'e')){
                if(at==('b')){
                    return Number.NEGATIVE_INFINITY;
                }
                if(at==('e')){
                    return Number.INFINITY;
                }
            }
        }
    }

    pre(){

    }
    post(){

    }

    checkpath(path){
        if(!fs.existsSync(path)){
            return false
        }else{
            return true
        }
    }
    isFloat(n) {
        return n === +n && n !== (n|0);
    }
}

