import { Comet } from "../../Comet/Comet.js"
import {Fist} from "../../../Fist.js";
import { _CLUSIVITY_VIEW, _POSITIONALITY_VIEW, _QUANTALITY_VIEW } from "./_Comets.js";

export class _View extends Comet{
    constructor(){
        super()

    }
    _flow(_fist, _tality="all", _ivity="in", _alityf="Inf", _ality=""){
        
        // return new _Flow()._flow();
    }

    _stream(_fist, _tality="", _alityf="", _ality=""){

        //return new _Stream()._stream();
    }
    _check(_fist){
        // console.log(process.cwd(), _fist)
        // if((fist != typeof Fist)&&(!this.checkPath(_fist))){
        //     throw Error("You can only flow to another fist");
        // }
    }
    _checkPath(_fist){

    }

    _quan(){
        this.comet(_QUANTALITY_VIEW)

    }

    _clus(ivity){
        this.comet(_CLUSIVITY_VIEW)
    }
    _position(ality){
        this.comet(_POSITIONALITY_VIEW)

    }

    _pre(){

    }
    _post(){

    }
}