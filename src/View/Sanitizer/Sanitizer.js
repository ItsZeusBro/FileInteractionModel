import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    sanitize(string, context){
        if (context == 'ality'){
            var ality = new Positionality();
            return string.match(ality.ality)
            
        }else if (context == 'tality'){
            var tality = new Quantality();
            return string.match(tality.tality)

        }else if (context == 'ivity'){
            var ivity = new Clusivity();
            return string.match(ivity.ivity)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
