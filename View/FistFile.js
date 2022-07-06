//INTERFACE
import {File} from "../Controller/File/File.js"
import {Flow} from "../Controller/SexyTransactions/Flow.js";
import {Stream} from "../Controller/SexyTransactions/Stream.js";
import {Script} from "../Controller/Interactions/Script/Script.js";
import {Clusive} from "../Controller/Interactions/Clusive/Clusive.js";
import {Position} from "../Controller/Interactions/Position/Position.js";
import {Quantifier} from "../Controller/Interactions/Quantifier/Quantifier.js";

class FistFile{
    constructor(path, post){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        this.File = new File();
        this.Flow = new Flow();
        this.Stream = new Stream();
        this.Post = new Script('post');
        this.Pre = new Script('pre');
        this.Clusive = new Clusive();
        this.Position = new Position();
        this.Quantifier = new Quantifier();

        if (post){
            //if this is the first in the chain, it should run
            //a post script immediately if available on this FistFile
            this.Post.post(post)
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
