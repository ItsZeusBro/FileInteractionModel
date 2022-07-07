import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import * as assert from "node:assert";

//This basically runs tests on every module
export class FistViewT extends Comet{
    constructor(){
        super();
        this.comet("sometest from FileView");
        this.run_tests();
    }

    run_tests(){
        this.fist();
        this.quantality();
        this.clusivity();
        this.positionality();
    }
    flow_fist(){
        var fist = new Fist();
        var file='./tests/fist.file'
        fist.fist(file);
        var a = new Fist();
        fist.fist(a)
    }

    quantality(){
        var fist = new Fist();
        var file='./tests/fist.file'
        var quantalities=['all', 'All', 'ALL', 'half', 'HALF', 'Half', 0.1, 0.5, 1.0]
        quantalities.forEach(tality => {
            this.comet('Testing Quantifier', tality)
            assert.equal(this.isInt(fist.quan(tality))||(this.isFloat(fist.quant(tality))), true)
            assert.equal(fist.quan(tality)>0, true);
        });

    }

    clusivity(){
        // `accepts "all" and 'half' inclusivity, 
        // percentage inclusivity, integers paired 
        // with b, mb, gb, etc.`
        // range inclusivity

        var fist = new Fist();
        var clusivities = ["all", "half", "All", "ALL", "AlL", ""]
        // this.fist(fist);
        // this.quan(tality);
        // this.clus(ivity);
        // this.pos(alityf);
        // this.pos(ality);
    }

    positionality(){

    }

    isInt(n){
        return Number(n) === n && n % 1 === 0;
    }
    
    isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    isString(n){
        return ((typeof n === 'string') || (n instanceof String))
    }

    
}

// if(tifier=='all' || tifier=='All' || tifier=='ALL'){
//     return Infinity;
// }else if(tifier=="Half"||tifier=="HALF"||tifier=="half"){
//     return 0.50;
// }else if(isInteger(tifier)){
//     return tifier;
// }else if(isFloat(tifier)){
//     if(tifier<1){
//         return Number.parseFloat(tifier).toFixed(2);
//     }else{
//         return Error("float value must be less than 1");
//     }
// }
// else{
//     throw Error("Invalid Quantifier");
// }

