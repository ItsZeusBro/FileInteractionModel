import {_Flow_} from "../_Flow_/_Flow_.js"
import {_Stream_} from "../_Stream_/_Stream_.js"
import {_Script_} from "../_Script_/_Script_.js"

//BUSINESS LOGIC
class _File_{
    constructor(path, post){

        //These take this _File_ object in order to access the file
        //for flowing, streaming, scripting, etc.
        this._flow_ = new _Flow_(this);
        this._stream_ = new _Stream_(this);
        this._pre_ = new _Script_(this); 
        this._post_ = new _Script_(this);
        this._path_ = path;

        if (post){
            //if this is the first in the chain, it should run
            //a post script immediately if available
            this._post_.post(post)
        }
    }
    flow(b, quant, exclsv, p1, p2, pre, post){
        //run the prescript on the file
        b._pre_.pre(pre);
        //flow the data to b
        this._flow_.flow(b, quant, exclsv, p1, p2);
        //run the postscript on the remainder of the file
        b._post_.post(post);
    }
    stream(b, quant, p1, p2, pre, post){
        //run the prescript on the file
        b._pre_.pre(pre);
        //stream the data to b
        this._stream_.stream(b, quant, p1, p2);
        //run the postscript on the remainder of the file
        b._post_.post(post);
    }
}