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
            `Quantality is evaluated right after positionality for an outgoing transaction
                which means it is only a single value that represents where from
                the start of positionality one wants to extend in the amount of data sent
            `
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
            `This is evaluated after positionality and quantality provide a begining and end anchor
                we can use beg, mid, and end to denote how much of the outgoing buffer should be shared
                with the original source. This is a colon separated triplet. The first element is the
                clusivity (in or ex), the second is beg or mid anchor expressions, the third is relative
                to the first in the way of a value, or can be anchored by end and used with expressions
            `
            `FistView.clus(ivity) ACCEPTS beg, end, mid, percentage strings, +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, etc. (prefixed with in or ex or just in or ex) 
             in:position:offset or in:0.5, or in:1b, or in:end, in:mid, in:beg (for future?), 
             ex:5% \n`,
            `FistView.clus(ivity) RETURNS {ivity:'', n:'', m:''}`
       )




    }

    positionality(){

        this.comet(
            `Positionality is evaluated first! It uses the entire file capacity to determine position`
            `FistView.position(ality) ACCEPTS beg, end, mid (strings), percentages, +-*/ ops \n`, 
            `Examples: 1b, 2mb, 14gb, etc. or 0.5, or 100b, or 5% or beg, end, beg+10b, mid-100mb, etc`
            `FistView.position(ality) RETURNS {ality:''}`

        )

        var positives=[
            'end', 'end-1b', 'end-1mb', 'end-10tb',
            'end/5b', 'end/2mb', 'end/46gb', 'end/50tb',
            'beg', 'beg+2b', 'beg+3gb', 'beg+4tb',
            'beg*5b', 'beg*2mb', 'beg*46gb', 'beg*50tb',
            'mid', 'mid+3b', 'mid+10mb', 'mid+1000gb', 'mid+10tb',
            'mid-5b', 'mid-100mb', 'mid-100gb', 'mid-10tb',
            'mid/5b', 'mid/10mb', 'mid/2gb', 'mid/100tb',
            'mid+0.5', 'end+0.05', 'beg*0.003', 'beg/0.0005','mid*0.0000003', //some of these would be wrong in validation, but not sanitization
            'mid*0.3e+9', 'beg+0.4e-10', 'end+4e+40', 'end-30e-3', 'mid+1e+100',
            '1b+end', '2+mid', 'mid+2'
        ]

        var negatives=[

        ]

        //needs:
        //1. list of operators (classes)
        //2. operators should have expectations that return true if conditions are met
        
        //Expression parsing - part 1:
        //1. find first operator from string
        //2. initiate operator class with it and ask it for expectations
        //3. look directly left of the operator and run algorithm to get anything it owns (set to class object)
        //4. look directly right of the operator and run algorithm to get anything it owns (set to class object)
        //5. push that object to queue
        //6. repeat 1-5 until string empty

        //Atomic Expression evaluation - part 2:
        //1. pop queue and evaluate object using evaluator object (throw error if false)
        //2. push to evaluation queue if true
        //3. repeat 1 and 2

        //Compound Expression evaluation - part 3
        //1. identify expression type
        //2. see if atomic expression type from evaluation queue meets compound expression expectations (throw error if false)
        //3. push to queue
        //4. repeat 1 and 2 on rest of atomic expressions
        
        //Return sanitized object
        //1. identify compound expression type
        //2. translate it to sanitized object
        //3. return sanitized object
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

