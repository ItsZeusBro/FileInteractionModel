import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    sanitize(string){
        if (context == 'positionality'){
            var ality = new Positionality();
            
        }else if (context == 'quantality'){
            var tality = new Quantality();
        }else if (context == 'clusivity'){
            var ivity = new Clusivity();
        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
