import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import {Utils} from "../../Source/Utils/Utils.js"
import * as assert from "node:assert";
import { Sanitizer } from "../../Source/View/Sanitizer/Sanitizer.js";
import { POSITIVE_CLUS, POSITIVE_NUMS } from "./Cases.js";

//This basically runs tests on every module
export class View extends Comet{
    constructor(){
        super();
        
        this.comet("sometest from FileView");
        this.run_tests();
    }
    run_tests(){
        console.log('running tests')
        this.fist();
        this.quantality();
        this.clusivity();
        this.positionality();
    }
    fist(){
        var fist = new Fist();
        var file='./tests/fist.file'
        fist.pound(file);
    }
    quantality(){
        this.comet('quantality()')
        this.comet(
            true,
            `Quantality is evaluated right after positionality for an outgoing transaction
                which means it is only a single value that represents where from
                the start of positionality one wants to extend in the amount of data sent
            `,
            `Quantality represents the amount of data flowing from file a to file b`,
            `FistView.quan(tality) ACCEPTS end, mid, percentages (strings), +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, 0.5, 1b, 5% \n`,
            `FistView.quan(tality) RETURNS {tality:''} \n`
        )
        var positives = POSITIVE_NUMS;

        var sanitizer = new Sanitizer()

        positives.forEach(expression => {
        
            if(sanitizer.sanitize(expression, 'tality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(expression, "is false")
            }
            //assert.equal(true, sanitizer.sanitize(expression, 'tality').includes(expression))
        });
    }
    clusivity(){
        this.comet('clusivity()')
        this.comet(
            true,
            `This is evaluated after positionality and quantality provide a begining and end anchor
                we can use beg, mid, and end to denote how much of the outgoing buffer should be shared
                with the original source. This is a colon separated triplet. The first element is the
                clusivity (in or ex), the second is beg or mid anchor expressions, the third is relative
                to the first in the way of a value, or can be anchored by end and used with expressions
            `,
            `FistView.clus(ivity) ACCEPTS beg, end, mid, percentage strings, +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, etc. (prefixed with in or ex or just in or ex) 
             in:position:offset or in:0.5, or in:1b, or in:end, in:mid, in:beg (for future?) 
             ex:5% \n`,
            `FistView.clus(ivity) RETURNS {ivity:'', n:'', m:''}`
       )
        var positives = POSITIVE_CLUS;
        var sanitizer = new Sanitizer()
        positives.forEach(expression => {
        
            if(sanitizer.sanitize(expression, 'ivity')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                console.log(sanitizer.sanitize(expression, 'ivity'))
                this.comet(expression, "is false")
            }
        });
    }
    positionality(){
        this.comet('positionality()')
        this.comet(
            true,
            `Positionality is evaluated first! It uses the entire file capacity to determine position`,
            `FistView.position(ality) ACCEPTS beg, end, mid (strings), percentages, +-*/ ops \n`, 
            `Examples: 1b, 2mb, 14gb, etc. or 0.5, or 100b, or 5% or beg, end, beg+10b, mid-100mb, etc`,
            `FistView.position(ality) RETURNS {ality:''}`
        )
        var positives = POSITIVE_NUMS;
        var sanitizer = new Sanitizer()
        positives.forEach(expression => {
            if(sanitizer.sanitize(expression, 'ality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(expression, "is false")
            }
        });
        var negatives=[
            '1b+end', '2+mid',
        ]
    } 
}