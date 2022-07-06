//INTERFACE
import {File} from "../Controller/File/File.js"
import {Flow} from "../Controller/SexyTransactions/Flow.js";
import {Stream} from "../Controller/SexyTransactions/Stream.js";
import {Script} from "../Controller/Interactions/Script/Script.js";
import {Clus} from "../Controller/Interactions/Clus/Clus.js";
import {Position} from "../Controller/Interactions/Position/Position.js";
import {Quantifier} from "../Controller/Interactions/Quantifier/Quantifier.js";

class FistFile{
    constructor(path, po){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        this.File = new File(this, path);
        this.Flow = new Flow(); //Flow() and Stream() contain pure functions, no need for params in constructor
        this.Stream = new Stream();

        if (po){
            //if this is the first in the chain, it should run
            //a post script immediately if available on this FistFile
            new Script(po).po(po)
        }

    }

    flow(b, q, clsvty, pin, pout, pre, post){
        q = new Quantifier(q);
        clsvty = new Clus(clsvty);

        pin = new Position(pin);
        
        pout = new Position(pout);
        pre = new Script(pre).pre(pre)
        this.Flow.flow(b, q, clsvty, pin, pout, pre, post)
        new Script(po).po(po)
        return b;   //should always return b!!!
    }

    stream(b, q, pin, pout, pre, post){
        this.Stream.stream(b, q, pin, pout, pre, post)
        return b;   //should always return b!!!
    }

}
