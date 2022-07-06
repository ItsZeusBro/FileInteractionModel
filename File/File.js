//INTERFACE
import * as fs from "node:fs"
import {_File_} from "_File_.js"
export class File{
    constructor(path, post){
        File.prototype.flow = this.flow;
        File.prototype.stream = this.stream;
        this._file_ = _File_(path, post)    //File business logic
    }
    flow(b, quant, exclsv, p1, p2, pre, post){
        this._file_.flow(b, quant, exclsv, p1, p2, pre, post)
        return b;
    }
    stream(b, quant, p1, p2, pre, post){
        this._file_.flow(b, quant, p1, p2, pre, post)
        return b;
    }


}