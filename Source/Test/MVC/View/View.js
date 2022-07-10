import {Fist} from "../../../../Fist.js"
import { Comet } from "../../../Comet/Comet.js";
import { Sanatize } from "../../../MVC/View_/Sanatize_/Sanatize_.js";
import { POSITIVE_CLUS, POSITIVE_NUMS } from "./Cases.js";

//This basically runs tests on every module
export class View extends Comet{

    constructor(){
        this.comet('Test.MVC.View.constructor(): View Tests')
        super();
        this.runTests();
    }

    runTests(){
        this.comet('Test.MVC.View.runTests(): Running Tests')
        this.fist();
        this.testPositionAlity();
        // this.testQuanTality();
        // this.testClusIvity();
    }

    createFist(){
        this.comet('Test.MVC.View.createFist(): Creating ', process.cwd()+'/Test/tests/fist.file')
        var fist = new Fist();
        var file = process.cwd()+'/Test/tests/fist.file'
        fist.pound(file);
    }

    testPositionAlity(){
        this.comet('Test.MVC.View.positionality(): ')
        var positives = POSITIVE_NUMS;
        var sanatize = new Sanatize()

        positives.forEach(expression => {
            console.log('original', expression)
            var ality = sanatize.sanatize(expression, 'ality')
        });
    } 

    testQuanTality(){
        this.comet('quantality()')
        var positives = POSITIVE_NUMS;
        var sanatize = new Sanitize_();

        positives.forEach(expression => {
            if(sanatize.sanatize(expression, 'tality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(sanatize.sanatize(expression, 'tality')['matches'])
                this.comet(expression, "is false")
            }
        });
    }

    testClusIvity(){
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