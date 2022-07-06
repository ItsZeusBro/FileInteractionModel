import { _Clus } from "../../Model/_Interactions_/_Clus/_Clus.js";

//we assume all parameters are sanitized
export class Clus{
    constructor(ivity_, sourcepath){
        this._Clusive_ = new _Clus(ivity_, sourcepath, this.n, this.m)
        this.sourcepath=sourcepath;
        
    }
    
}