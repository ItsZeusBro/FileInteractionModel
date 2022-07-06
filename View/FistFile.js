//INTERFACE
import {File} from "../Controller/File/File.js"
import {Flow} from "../Controller/SexyTransactions/Flow/Flow.js";
import {Stream} from "../Controller/SexyTransactions/Stream/Stream.js";
import {Script} from "../Controller/SexyTransactions/Script/Script.js";
import {Clus} from "../Controller/Interactions/Clus/Clus.js";
import {Position} from "../Controller/Interactions/Pos/Pos.js";
import {Quantifier} from "../Controller/Interactions/Quan/Quan.js";

class FistFile{
    constructor(sourcepath, po){
        this.sourcepath=sourcepath;
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        this.File = new File(this, path);
        this.Flow = new Flow(); //Flow() and Stream() contain pure functions, no need for params in constructor
        this.Stream = new Stream();
        if (po){
            //if this is the first in the chain, it should run
            //a post script immediately if available on this FistFile
            new Script(po).po(po)
        }
    }
    
    flow(b, q, clsvty, pin, pout, pre, post){
        q = new Quantifier(q);
        clsvty = new Clus(this.sourcepath, clsvty);

        pin = new Position(pin);
        pout = new Position(pout);

        pre = new Script(pre).pre(pre)
        this.Flow.flow(b, q, clsvty, pin, pout, pre, post)
        new Script(po).po(po)
        return b;   //should always return b!!!
    }

    stream(b, q, pin, pout, pre, post){
        this.Stream.stream(b, q, pin, pout, pre, post)
        return b;   //should always return b!!!
    }
    b(){

    }
    q(){
        //accept a float statistical value between 1 and 100 percent for buffer files
        //abstract options "all", percentage, integer representing bytes, mb, gb, etc.
        if(q=='all' || q=='All' || q=='ALL'){
            return Infinity;
        }else if(q=="Half"||q=="HALF"||q=="half"){
            return 0.50;
        }else if(isInteger(q)){
            return q;
        }else if(isFloat(q)){
            if(q<1){
                return Number.parseFloat(q).toFixed(2)
            }else{
                return Error("float value must be less than 1")
            }
        }
        else{
            throw Error("Invalid Quantifier")
        }
    }
    clsvty(){
        var clues;
        try{
            var iv = ivity.split(':');
            if(iv[0]!='in' && inv[0]!='ex'){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else{
                this.ivity=iv.pop(0)
            }
            if(!isInteger(iv[0])&&!isInteger(iv[1])){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else{
                //this means they are integers
                this.n=iv[0];
                this.m=iv[1];
                return
            }
        }catch{
            if(ivity!='in' && ivity!='ex' && ivity!=undefined){
                throw Error(
                    `an ivity is supposed to look like in:n:m 
                    or ex:n:m where n and m are a range of ints`
                )
            }else if(ivity==undefined){
                this.ivity='n';
                this.n=undefined;
                this.m=undefined;
            }else{
                this.ivity=ivity;
                this.n=undefined;
                this.m=undefined;
            }
        }
        return
    }
    pinpout(){
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
