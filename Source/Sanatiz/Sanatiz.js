import {Sclusatiz} from "./Sclusatiz/Sclusatiz.js"
import {Squanatiz} from "./Squanatiz/Squanatiz.js"
import {Sposatiz} from "./Sposatiz/Sposatiz.js"

export class Sanatiz{

    sanatiz(sPosaQuanaClus, context){
        if (context == 'ality'){
            return new Sposatiz().sanatiz(sPosaQuanaClus)

        }else if (context == 'tality'){

            return Squanatiz().sanatiz(sPosaQuanaClus)

        }else if (context == 'ivity'){

            return Sclusatiz().sanatiz(sPosaQuanaClus)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}