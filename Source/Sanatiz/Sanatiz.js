import {Sclusatiz} from "./Sclusatiz/Sclusatiz.js"
import {Squanatiz} from "./Squanatiz/Squanatiz.js"
import {Sposatiz} from "./Sposatiz/Sposatiz.js"

export class Sanatiz{

    sanitiz(sPosaQuanaClus, context){
        if (context == 'ality'){
            
            return new Sposatiz().sanit(sPosaQuanaClus)

        }else if (context == 'tality'){

            return Squanatiz().sanit(sPosaQuanaClus)

        }else if (context == 'ivity'){

            return Sclusatiz().sanit(sPosaQuanaClus)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}