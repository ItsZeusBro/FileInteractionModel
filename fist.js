//Everything having to do with the interface goes here
//which includes, string sanitization
//file existence checking
//try catch handlers (user mitigation NOT INTERNAL)
//error handling
//post and prescript handling
//basically anything to do with the flow of the flow
import {File} from "./File/File.js";
class Fist{
    constructor(file){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.flow;
        Fist.prototype.pre = this.pre;
        Fist.prototype.pre = this.pre;
        this.file = new File(file)
    }
    flow(b, quant, exclsv, p1, p2, pre, post){

        return b;
    }
    stream(b, quant, p1, p2, pre, post){
        return b;
    }
}

var a = new Fist('some/file/somewhere')
var b = new Fist('some/other/file/somewhere')
var c = new Fist('some/third/file/somewhere')
a.flow(b, null, null, null, null, ()=>{}, ()=>{}).flow(c, null, null, null, null, ()=>{}, ()=>{})