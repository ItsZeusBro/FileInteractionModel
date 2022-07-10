import {Fist} from "../../../../Fist.js"
import { Comet } from "../../../Comet/Comet.js";
import { Sanatize } from "../../../MVC/View_/Sanatize_/Sanatize_.js";
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
        var file = process.cwd()+'/Test/tests/fist.file'
        fist.pound(file);
    }

    positionality(){
        this.comet('positionality()')

        var positives = POSITIVE_NUMS;
        var sanatize = new Sanatize()
        positives.forEach(expression => {
            console.log('original', expression)
            var ality = sanatize.sanatize(expression, 'ality')

        });

    } 

    quantality(){
        this.comet('quantality()')

        var positives = POSITIVE_NUMS;

        var sanatize = new Sanitize_()

        positives.forEach(expression => {
        
            if(sanatize.sanatize(expression, 'tality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatize.sanatize(expression, 'tality')['matches'])
                this.comet(expression, "is false")
            }
        });
    }

    clusivity(){
        this.comet('clusivity()')

        var positives = POSITIVE_CLUS;
        var sanatize = new Sanitize_()
        positives.forEach(expression => {
        
            if(sanatize.sanatize(expression, 'ivity')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatize.sanatize(expression, 'ivity')['matches'])
                this.comet(expression, "is false")
            }
        });
    }
    
}