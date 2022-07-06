import {Fist} from "../../Fist.js"
import { Comet } from "../Comet/Comet.js";
//This basically runs tests on every module
export class FistViewT extends Comet{
    constructor(){
        super();
        this.comet("sometest from FileView");
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
        var fist = new Fist();
        var file='./tests/fist.file'
        //, tifier, ivity, atin, atout
        fist.flow(file);

    }

    flow_quantifier(){
        var fist = new Fist();
        var file='./tests/fist.file'
        var quantifiers=['all', 'All', 'ALL', 'half', 'HALF', 'Half', 0.1, 0.5, 1.0]
        quantifiers.forEach(element => {
            this.comet('Testing Quantifier', element)
            fist.flow(file, element);
        });

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

