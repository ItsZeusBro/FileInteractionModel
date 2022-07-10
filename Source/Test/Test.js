import { View } from "./MVC/View/View.js";
import { Comet } from "../Comet/Comet.js"
import { Spells } from "./Magic/Spells.js"
class Test extends Comet{

    constructor(){
        super();

    }

    runTests(){
        new Spells()
        new View()
    }   
    
}

new Test().runTests()