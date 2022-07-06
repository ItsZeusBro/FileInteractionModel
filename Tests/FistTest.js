import { FistViewT } from "./FistViewT/FistViewT.js"
import { Comet } from "./Comet/Comet.js"

export class FistTest extends Comet{
    constructor(){
        super()
        this.fv = FistView()
        process.on('uncaughtException', err => {
            this.comet('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
}