import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import { Utils } from "../../Utils/Utils.js";
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
    fist(){

        var fist = new Fist();
        var file='./tests/fist.file'
        fist.fist(file);
        var a = new Fist();
        fist.fist(a);

    }

    quantality(){

        this.comet(
            `Quantality represents the amount of data flowing from file a to file b`
            `FistView.quan(tality) ACCEPTS end, mid, percentages (strings), +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, 0.5, 1b, 5% \n`,
            `FistView.quan(tality) RETURNS {tality:''} \n`
        )
        var quantalitiesTrue=[
            

        ]

    }

    clusivity(){

        this.comet(
            `FistView.clus(ivity) ACCEPTS beg, end, mid, percentage strings, +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, etc. (prefixed with in or ex or just in or ex) 
             in:position:offset or in:0.5, or in:1b, or in:end, in:mid, in:beg (for future?), 
             ex:5% \n`,
            `FistView.clus(ivity) RETURNS {ivity:'', n:'', m:''}`
       )

    }

    positionality(){

        this.comet(
            `FistView.position(ality) ACCEPTS beg, end, mid (strings), percentages, +-*/ ops \n`, 
            `Examples: 1b, 2mb, 14gb, etc. or 0.5, or 100b, or 5% or beg, end, beg+10b, mid-100mb, etc`
            `FistView.position(ality) RETURNS {ality:''}`

        )

        var posTrue=[
            'end', 'end-1b', 'end-1mb', 'end-10tb',
            'end/5b', 'end/2mb', 'end/46gb', 'end/50tb',
            'beg', 'beg+2b', 'beg+3gb', 'beg+4tb',
            'beg*5b', 'beg*2mb', 'beg*46gb', 'beg*50tb',
            'mid', 'mid+3b', 'mid+10mb', 'mid+1000gb', 'mid+10tb',
            'mid-5b', 'mid-100mb', 'mid-100gb', 'mid-10tb',
            'mid/5b', 'mid/10mb', 'mid/2gb', 'mid/100tb',
            'mid+0.5', 'end+0.05', 'beg*0.003', 'beg/0.0005','mid*0.0000003', //some of these would be wrong in validation, but not sanitization
            'mid*0.3e+9', 'beg+0.4e-10', 'end+4e+40', 'end-30e-3', 'mid+1e+100',
        ]

        var posFalse=[
            
        ]

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

