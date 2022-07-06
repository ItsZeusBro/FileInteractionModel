
import {Script} from "../SexyTransactions/Script/Script.js";
import {Clus} from "../Interactions/Clus/Clus.js";
import {Pos} from "../Interactions/Pos/Pos.js";
import {Quant} from "../Interactions/Quan/Quan.js";
class Fist{
    constructor(file, po){
        this.fistfile=file;
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        this.File = new File(this, path);
        this.Flow = new Flow(); //Flow() and Stream() contain pure functions, no need for params in constructor
        this.Stream = new Stream();
        if (po){
            //if this is the first in the chain, it should run
            //a post script immediately if available on this FistFile
            new Script(po).po(po);
        }
    }
    flow(b, ifier, ivity, itionIn, itionOut, pre, post){
        Quantifier = new Quant(ifier);
        Clusivity = new Clus(ivity, this.sourcepath);

        PositionIn = new Pos(itionIn);
        PositionOut = new Pos(itionOut);

        new Script(pre).pre(pre)
        this.Flow.flow(b, Quantifier, Clusivity, PositionIn, PositionOut, pre, post)
        new Script().positionOut(PositionOut) //
        return b;   //should always return b!!!
    }

    stream(b, q, pin, pout, pre, post){
        this.Stream.stream(b, q, pin, pout, pre, post)
        return b;   //should always return b!!!
    }
}