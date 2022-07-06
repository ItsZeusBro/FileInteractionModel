//INTERFACE
import * as fs from "node:fs"
import {_File_} from "../../Internals/_File_/_File_.js"
export class File{
    constructor(path, post){
        File.prototype.flow = this.flow;
        File.prototype.stream = this.stream;
        this._file_ = _File_(path, post)    //File business logic
    }
    flow(b, q, clusivity, pin, pout, pre, post){
        this._file_.flow(b, q, clusivity, pin, pout, pre, post)
        return b;
    }
    stream(b, q, pin, pout, pre, post){
        this._file_.flow(b, q, pin, pout, pre, post)
        return b;
    }


}