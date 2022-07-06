import { FistTest } from "../FistTest.js" //inherits comet functionality
import {Fist} from "../../Fist.js"
//This basically runs tests on every module
export class FistViewT extends FistTest{
    constructor(){
        super();
        this.comet("sometest from FileView");
        this.fist = new Fist();
        this.run_tests();
    }

    run_tests(){
        this.flow_fist();
        this.flow_quantifier();
        this.flow_clusivity();
        this.flow_positionIn();
        this.flow_positionOut();
    }
    flow_fist(){
        var fist='./tests/fist.file'
        //, tifier, ivity, atin, atout
        this.fist.flow(fist);

    }

    flow_quantifier(){
        // var tifier=""
        // this.fist.flow(fist, tifier, ivity, atin, atout);
    }

    flow_clusivity(){

    }
    flow_positionIn(){

    }
    flow_positionOut(){

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

