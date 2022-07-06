//INTERFACE
import {File} from "../Controller/File/File.js"
import {Flow} from "../Controller/SexyTransactions/Flow/Flow.js";
import {Stream} from "../Controller/SexyTransactions/Stream/Stream.js";
import {Fist} from "../Controller/Fist.js"

class Fist{
    constructor(file, post){
       this.FistFile = new Fist(file, post)
    }
    
    flow(st, ier, ity, In, Out){
        new Flow(
            this.clean_fi(st), 
            this.clean_if(ier), 
            this.clean_iv(ity), 
            this.clean_ition(In), 
            this.clean_ition(Out)
        )
    }

    stream(st, ier, In, Out){

    }
    clean_fi(st){
        

    }
    clean_if(ier){
        //accept a float statistical value between 1 and 100 percent for buffer files
        //abstract options "all", percentage, integer representing bytes, mb, gb, etc.
        if(ier=='all' || ier=='All' || ier=='ALL'){
            return Infinity;
        }else if(ier=="Half"||ier=="HALF"||ier=="half"){
            return 0.50;
        }else if(isInteger(ier)){
            return ier;
        }else if(isFloat(ier)){
            if(ier<1){
                return Number.parseFloat(ier).toFixed(2)
            }else{
                return Error("float value must be less than 1")
            }
        }
        else{
            throw Error("Invalid Quantifier")
        }
    }
    clean_iv(ity){
        var ivity = {}
        try{
            ity = ity.split(':');
            if(ity[0]!='in' && ity[0]!='ex'){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else{
                ivity['iv']=ity.pop(0)
            }
            if(!isInteger(ity[0])&&!isInteger(ity[1])){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else{
                //this means they are integers
                ivity['it']=ity[0];
                ivity['y']=ity[1];
            }
        }catch{
            if(ity!='in' && ity!='ex' && ity!=undefined){
                throw Error(
                    `an ity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else if(ity==undefined){
                ivity['iv']=undefined;
                ivity['it']=ity;
                ivity['y']=undefined;
            }else{
                ivity['iv']=undefined
                ivity['it']=undefined;
                ivity['y']=ity;
            }
        }
        return ivity
    }
    clean_ition(){
        //'at:b' or 'at:e' or 'b' or 'e' or 'at:n', or n, or undefined
        if(isInteger(at)){
            return at
        }else{
            if(at==('at:b'|'at:e'|'b'|'e')){
                if(at==('b')){
                    return Number.NEGATIVE_INFINITY
                }
                if(at==('e')){
                    return Number.INFINITY
                }else{
                    at = at.split(':')
                    this.pinpout(at[1]) 
                    //we know its an b or e, so just use recursion
                }
            }
        }
    }

    pre(){

    }
    post(){

    }

}
