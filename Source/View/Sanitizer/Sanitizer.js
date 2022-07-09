import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    isRegular(string, context){
        if (context == 'ality'){

            var ality = new Positionality();
            return ality.isAlity(string)

        }else if (context == 'tality'){

            var tality = new Quantality();
            return tality.isTality(string)

        }else if (context == 'ivity'){

            var ivity = new Clusivity();
            return ivity.isIvity(string)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }

    tokenize(){
        //tokenize string for subpatterns in left to right order
        
    }
}
