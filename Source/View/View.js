//INTERFACE
import {Flow} from "../Controller/SexyTransactions/Flow/Flow.js";
import { Stream } from "../Controller/SexyTransactions/Stream/Stream.js";
import { Comet } from "../../Comet/Comet.js"
import {Fist} from "../../Fist.js";
import * as fs from "node:fs";
import { CLUSIVITY_VIEW, POSITIONALITY_VIEW, QUANTALITY_VIEW } from "../../Source/View/Comets.js";

export class View extends Comet{
    constructor(){
        super()

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
        this.comet(QUANTALITY_VIEW)
        var talityObj={}
        return talityObj;
    }

    clus(ivity){
        this.comet(CLUSIVITY_VIEW)
        var ivityObj = {}
        return ivityObj;
    }
    position(ality){
        this.comet(POSITIONALITY_VIEW)
        var ality = {}
        return ality
    }

    pre(){

    }
    post(){

    }


}

