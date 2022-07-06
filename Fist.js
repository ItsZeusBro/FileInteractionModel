import { FistView } from "./src/View/FistView.js";
export class Fist{
    constructor(){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
        Fist.prototype.pound = this.pound; //not strictly necessary (for creating files)
        Fist.prototype.sprinkl = this.sprinkl; //not strictly necessary (for creating files)
        this.FistView = new FistView()
    }

    flow(fist, tifier, ivity, atin, atout){
        this.FistView.flow(fist, tifier, ivity, atin, atout)
        return this;
    }
    stream(fist, tifier, atin, atout){
        //tifier here means stream up to n number of bytes
        this.FistView.stream(fist, tifier, atin, atout)
        return this;
    }
    pound(imganirayFist){

    }
    sprinkl(drips){

    }
}