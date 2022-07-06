import { FistViewT } from "./FistViewT/FistViewT.js";
import { Comet } from "./Comet/Comet.js"

export class FistTest extends Comet{
    constructor(){
        super();
        process.on('uncaughtException', err => {
            this.comet('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
        this.run_tests()
    }
    run_tests(){
        new FistViewT()
    }   
}

new FistTest()