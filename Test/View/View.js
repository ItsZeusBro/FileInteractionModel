import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import {GoodyBag} from "../../Source/GoodyBag/GoodyBag.js"
import * as assert from "node:assert";
import { Sanatiz } from "../../Source/Sanatiz/Sanatiz.js";
import { POSITIVE_CLUS, POSITIVE_NUMS } from "./Cases.js";

//This basically runs tests on every module
export class View extends Comet{
    constructor(){
        super();
        
        this.comet("sometest from View");
        this.run_tests();
    }
    run_tests(){
        console.log('running tests')
        this.fist();
        this.positionality();
        this.quantality();
        this.clusivity();
    }
    fist(){
        var fist = new Fist();
        console.log(process.cwd())
        var file=process.cwd()+'/Test/tests/fist.file'
        fist.pound(file);
    }
    positionality(){
        this.comet('positionality()')
        // this.comet(
        //     true,
        // )
        var positives = POSITIVE_NUMS;
        console.log(positives)
        var sanatiz = new Sanatiz()
        positives.forEach(expression => {
            if(sanatiz.sanatiz(expression, 'ality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatiz.sanatiz(expression, 'ality')['matches'])
                this.comet(expression, "is false")
            }
        });
        var negatives=[
            '1b+end', '2+mid',
        ]
    } 
    quantality(){
        this.comet('quantality()')

        var positives = POSITIVE_NUMS;

        var sanatiz = new Sanitizer()

        positives.forEach(expression => {
        
            if(sanatiz.sanatiz(expression, 'tality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatiz.sanatiz(expression, 'tality')['matches'])
                this.comet(expression, "is false")
            }
        });
    }
    clusivity(){
        this.comet('clusivity()')
    //     this.comet(
    //         true,
    //    )
        var positives = POSITIVE_CLUS;
        var sanatiz = new Sanitizer()
        positives.forEach(expression => {
        
            if(sanatiz.sanatiz(expression, 'ivity')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatiz.sanatiz(expression, 'ivity')['matches'])
                this.comet(expression, "is false")
            }
        });
    }
    
}