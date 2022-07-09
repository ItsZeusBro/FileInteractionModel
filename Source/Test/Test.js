import { View } from "./View/View.js";
import { Comet } from "../Comet/Comet.js"

class Test extends Comet{
    constructor(){
        super();

    }
    run_tests(){
        new View()
    }   
}

new Test().run_tests()