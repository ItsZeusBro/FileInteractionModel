import {Sclusatiz} from "./Sclusitiz/Sclusitiz.js"
import {Squanatiz} from "./Squanatiz/Squanatiz.js"
import {Sposatiz} from "./Sposatiz/Sposatiz.js"

export class Sanitiz{

    isRegular(string, context){
        if (context == 'ality'){

            var ality = new Sposatiz();
            return ality.isAlity(string)

        }else if (context == 'tality'){

            var tality = new Squanatiz();
            return tality.isTality(string)

        }else if (context == 'ivity'){

            var ivity = new Sclusatiz();
            return ivity.isIvity(string)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }

}
