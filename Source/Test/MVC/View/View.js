import {Fist} from "../../../../Fist.js"
import { Comet } from "../../../Comet/Comet.js";
import { _Sanatize } from "../../../MVC/_View/_Sanatize/_Sanatize.js";
import { POSITIVE_CLUS, POSITIVE_NUMS } from "./Cases.js";

//This basically runs tests on every module
export class View extends Comet{

    constructor(){
        super();
        this.comet('Test.MVC.View.constructor(): View Tests')
        this.runTests();
    }

    runTests(){
        this.comet('Test.MVC.View.runTests(): Running Tests')
        this.createFist();
        this.testPositionAlity();
        // this.testQuanTality();
        // this.testClusIvity();
    }

    createFist(){
        this.comet('Test.MVC.View.createFist(): Creating ', process.cwd()+'/Source/Test/tests/fist.file')
        var fist = new Fist();
        var imaginaryFist = process.cwd()+'/Source/Test/tests/fist.file'
        console.log(imaginaryFist)
        fist.pound(imaginaryFist);
    }

    testPositionAlity(){
        this.comet('Test.MVC.View.positionality(): ')
        var positives = POSITIVE_NUMS;
        var _sanatize = new _Sanatize()

        positives.forEach(expression => {
            console.log('original', expression)
            var ality = _sanatize._sanatize(expression, 'positionality')
        });
    } 

    testQuanTality(){
        this.comet('quantality()')
        var positives = POSITIVE_NUMS;
        var _sanatize = new _Sanitize();

        positives.forEach(expression => {
            if(_sanatize._sanatize(expression, 'quantality')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(_sanatize._sanatize(expression, 'tality')['matches'])
                this.comet(expression, "is false")
            }
        });
    }

    testClusIvity(){
        this.comet('clusivity()')
        var positives = POSITIVE_CLUS;
        var _sanatize = new _Sanitize();

        positives.forEach(expression => {
            if(_sanatize._sanatize(expression, 'clusivity')['matches'][0]==expression){
                this.comet(expression, "is true")
            }else{
                this.comet(_sanatize._sanatize(expression, 'ivity')['matches'])
                this.comet(expression, "is false")
            }
        });
    }
}