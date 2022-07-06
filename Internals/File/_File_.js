import {_Flow_} from "../Flow/Flow.js"
import {_Stream_} from "../Stream/Stream.js"
import {_Script_} from "../Script/Script.js"

//BUSINESS LOGIC
class _File_{
    constructor(path, post){

        //These take this _File_ object in order to access the file
        //for flowing, streaming, scripting, etc.
        this.flow = new _Flow_(this);
        this.stream = new _Stream_(this);
        this.pre = new _Script_(this); 
        this.post = new _Script_(this);
        this.path = path;

        if (post){
            //if this is the first in the chain, it should run
            //a post script immediately if available
            this.post.post(post)
        }
    }
    setScriptCallbacks(pre, post){
        this.pre = pre;
        this.post = post;
    }
    _flow_(b, quant, exclsv, p1, p2, pre, post){
        //run the prescript on the file
        b.pre.pre(pre);
        //flow the data to b
        this.flow.flow(b, quant, exclsv, p1, p2);
        //run the postscript on the remainder of the file
        b.post.post(post);
    }
    _stream_(b, quant, p1, p2, pre, post){
        //run the prescript on the file
        b.pre.pre(pre);
        //stream the data to b
        this.stream.stream(b, quant, p1, p2);
        //run the postscript on the remainder of the file
        b.post.post(post);
    }
}