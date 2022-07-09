import {Sclusatiz} from "./Sclusatiz/Sclusatiz.js"
import {Squanatiz} from "./Squanatiz/Squanatiz.js"
import {Sposatiz} from "./Sposatiz/Sposatiz.js"

export class Sanatiz{

    sanatiz(sPosaQuanaClus, context){
        if (context == 'ality'){
            return new Sposatiz().sanat(sPosaQuanaClus)

        }else if (context == 'tality'){

            return Squanatiz().sanat(sPosaQuanaClus)

        }else if (context == 'ivity'){

            return Sclusatiz().sanat(sPosaQuanaClus)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}