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
        
        // return new Flow().flow();
    }

    stream(fist, tality="", alityf="", ality=""){

        //return new Stream().stream();
    }
    check(fist){
        console.log(process.cwd(), fist)
        if((fist != typeof Fist)&&(!this.checkpath(fist))){
            throw Error("You can only flow to another fist");
        }
    }

    quan(tality){
        var talityObj={}


        return talityObj;
    }

    clus(ivity){
        var ivityObj = {}
        

        return ivityObj;
    }
    position(ality){
        var ality = {}

        return ality
    }

    pre(){

    }
    post(){

    }


}

