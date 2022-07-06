import { _Clus } from "../../Model/_Interactions_/_Clus/_Clus.js";

//we assume all parameters are sanitized
export class Clus{
    constructor(ivity, sourcepath){
        this._Clusivity_ = new _Clus(ivity) //_
        this.sourcepath=sourcepath;
        
    }
    
}