import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    sanitize(string){
        if (context == 'positionality'){
            var ality = new Positionality();
            return ality.ality.test(string)
            
        }else if (context == 'quantality'){
            var tality = new Quantality();
            return tality.tality.test(string)

        }else if (context == 'clusivity'){
            var ivity = new Clusivity();
            return ivity.ivity.test(string)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
