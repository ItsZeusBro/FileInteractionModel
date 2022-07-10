import * as MAGIC_SPELLS from "../../Magic/Spells.js"
import { Comet } from "../../Comet/Comet.js"
import {TEST_CASES} from "./Cases.js"
import * as assert from "node:assert"
export class Spells extends Comet{
    constructor(){
        super();
        this.testScientific();
    }
    testScientific(){

        for (const [key, value] of Object.entries(TEST_CASES)) {
            this.comet("Testing ", key, value);
            assert.equal(TEST_CASES[key].match(MAGIC_SPELLS.ANYTHING_SCIENTIFIC)[0], value);
            this.comet("Result: ", TEST_CASES[key].match(MAGIC_SPELLS.ANYTHING_SCIENTIFIC)[0], value, "\n");

        }
    }
}