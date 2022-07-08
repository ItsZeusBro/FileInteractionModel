import {Clusivity} from "./Clusivity/Clusivity.js"
import {Quantality} from "./Quantality/Quantality.js"
import {Positionality} from "./Positionality/Positionality.js"

export class Sanitizer{

    sanitize(string, context){
        var spacedOut=string.split(' ').join('')

        if (context == 'ality'){
            var ality = new Positionality();
            return {"matches":spacedOut.match(ality.ality), "spacedout":spacedOut, "original":string}
            
        }else if (context == 'tality'){
            var tality = new Quantality();
            return {"matches":spacedOut.match(tality.tality), "spacedout":spacedOut, "original":string}

        }else if (context == 'ivity'){
            var ivity = new Clusivity();
            return {"matches":spacedOut.match(ivity.ivity), "spacedout":spacedOut, "original":string}

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}
