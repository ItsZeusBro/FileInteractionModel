import {File} from "../../File/File.js"
import { FistTest } from "../FistTest.js"

//This basically runs tests on every module
export class FileInterfaceTest extends FistTest{
    constructor(){
        super()
        this.ti = new File()
        this.comet("sometest from FileInterfaceTest")
    }
    
}