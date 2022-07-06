import { FistViewT } from "./FistViewT/FistViewT.js";
import { Comet } from "./Comet/Comet.js"

class FistTest extends Comet{
    constructor(){
        super();

    }
    run_tests(){
        new FistViewT()
    }   
}

new FistTest().run_tests()