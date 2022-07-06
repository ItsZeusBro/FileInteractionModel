//INTERFACE
import {Flow} from "../Controller/SexyTransactions/Flow/Flow.js";
import { Stream } from "../Controller/SexyTransactions/Stream/Stream.js";
import {Fist} from "../../Fist.js";
import * as fs from "node:fs";

export class FistView{
    constructor(){

    }
    
    flow(fist, tifier, ivity, atin, atout){
        this.check(fist);
        //this.cleanQuan(tifier);
        //this.cleanPosition(atin);
        //this.cleanPosition(atout);
        // return new Flow().flow(
        //     this.check(fist), 
        //     this.cleanQuan(tifier), 
        //     this.cleanClus(ivity), 
        //     this.cleanPosition(atin), 
        //     this.cleanPosition(atout)
        // );
    }

    stream(fist, tifier, atin, atout){
        this.check(fist);
        //this.cleanQuan(tifier);
        //this.cleanPosition(atin);
        //this.cleanPosition(atout);

        //return new Stream().stream(
        //     this.check(fist), 
        //     this.cleanQuan(tifier),
        //     this.cleanPosition(atin),
        //     this.cleanPosition(atout)
        // );
    }
    check(fist){
        if((fist != typeof Fist)||(!this.checkpath(fist))){
            throw Error("You can only flow to another fist");
        }
    }

    cleanQuan(tifier){
        //accept a float statistical value between 1 and 100 percent for buffer files
        //abstract options "all", percentage, integer representing bytes, mb, gb, etc.
        if(tifier=='all' || tifier=='All' || tifier=='ALL'){
            return Infinity;
        }else if(tifier=="Half"||tifier=="HALF"||tifier=="half"){
            return 0.50;
        }else if(isInteger(tifier)){
            return tifier;
        }else if(isFloat(tifier)){
            if(tifier<1){
                return Number.parseFloat(tifier).toFixed(2);
            }else{
                return Error("float value must be less than 1");
            }
        }
        else{
            throw Error("Invalid Quantifier");
        }
    }
    cleanClus(ivity){
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
            if(!isInteger(ivity[0])&&!isInteger(ivity[1])){
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
    cleanPosition(at){
        //'at:b' or 'at:e' or 'b' or 'e' or 'at:n', or n, or undefined
        if(isInteger(at)){
            return at;
        }else{
            if(at==('at:b'|'at:e'|'b'|'e')){
                if(at==('b')){
                    return Number.NEGATIVE_INFINITY;
                }
                if(at==('e')){
                    return Number.INFINITY;
                }else{
                    at = at.split(':');
                    this.cleanPosition(at[1]); 
                    //we know its an b or e, so just use recursion
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

}
