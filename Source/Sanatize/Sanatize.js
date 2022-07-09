import {Clusatize} from "./Clusatize/Clusatize.js"
import {Quanatize} from "./Quanatize/Quanatize.js"
import {Posatize} from "./Posatize/Posatize.js"

export class Sanatize{

    sanatize(sPosaQuanaClus, context){
        if (context == 'ality'){
            return new Posatize().sanat(sPosaQuanaClus)

        }else if (context == 'tality'){

            return Quanatize().sanat(sPosaQuanaClus)

        }else if (context == 'ivity'){

            return Clusatize().sanat(sPosaQuanaClus)

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}