import { FistTest } from "../FistTest.js" //inherits comet functionality
import {FistView} from "../../src/View/FistView.js"
//This basically runs tests on every module
export class FistViewT extends FistTest{
    constructor(){
        super()

        this.comet("sometest from FileView")
    }
    
}