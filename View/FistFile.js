//INTERFACE

import {Flow} from "../Controller/SexyTransactions/Flow.js"
import {Stream} from "../Controller/SexyTransactions/Stream.js"
import { Script } from "../Controller/Interactions/Script/Script.js";

class FistFile{
    constructor(post){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        this.Flow = new Flow();
        this.Stream = new Stream();
        this.Post = new Script('post');
        this.Pre = new Script('pre');

        if (post){
            //if this is the first in the chain, it should run
            //a post script immediately if available on this FistFile
            this.Post.post(post)
        }
        String.prototype.flow = (b, q, clsvty, pin, pout, pre, post)=>{
            //console.log(this)
            return new FistFile(this).flow(b, q, clsvty, pin, pout, pre)
        }
        String.prototype.stream = (b, q, pin, pout, pre, post)=>{
            //console.log(this)
            return new FistFile(this).stream(b, q, pin, pout, pre)
        }
    }

    flow(b, q, clsvty, pin, pout, pre, post){
        this.Flow.flow(b, q, clsvty, pin, pout, pre, post)
        return this;
    }

    stream(b, q, pin, pout, pre, post){
        this.Stream.stream(b, q, pin, pout, pre, post)
        return this;
    }

}
