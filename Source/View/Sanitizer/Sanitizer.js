import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    regularize(string, context){
        if (context == 'ality'){

            var ality = new Positionality();
            return ality.regularize(string)

        }else if (context == 'tality'){

            var tality = new Quantality();
            return tality.regularize(string)

        }else if (context == 'ivity'){

            var ivity = new Clusivity();
            return ivity.regularize(string)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
