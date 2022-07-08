import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    sanitize(string, context){
        if (context == 'ality'){
            var ality = new Positionality();
            return ality.ality.test(string)
            
        }else if (context == 'tality'){
            var tality = new Quantality();
            return tality.tality.test(string)

        }else if (context == 'ivity'){
            var ivity = new Clusivity();
            return ivity.ivity.test(string)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
