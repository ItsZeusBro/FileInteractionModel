import {_Flow_} from "../Flow/Flow.js"
import {_Stream_} from "../Stream/Stream.js"
import {_Script_} from "../Script/Script.js"

//BUSINESS LOGIC
class _File_{
    constructor(path, post){
        this.pre;
        this.post = post;
        this.path = path;
        this.flow = new _Flow_();
        this.stream = new _Stream_();
        this.pre = new _Script_();
        this.post = new _Script_();
    }
    setScriptCallbacks(pre, post){
        this.pre = pre;
        this.post = post;
    }
    _flow_(b, quant, exclsv, p1, p2, pre, post){
        //run the prescript on the file
        this.pre.pre(pre, this.path);
        //flow the data to b
        this.flow.flow(b, quant, exclsv, p1, p2);
        //run the postscript on the remainder of the file
        this.post.post(post, this.path);
    }
    _stream_(b, quant, p1, p2, pre, post){
        //run the prescript on the file
        this.pre.pre(pre, this.path);
        //stream the data to b
        this.stream.stream(b, quant, p1, p2);
        //run the postscript on the remainder of the file
        this.post.post(post, this.path);
    }
}