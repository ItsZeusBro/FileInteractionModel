import {Fist} from "../../Fist.js"
import { Comet } from "../../Comet/Comet.js";
import { Utils } from "../../Utils/Utils.js";
import * as assert from "node:assert";
import { Sanitizer } from "../../src/View/Sanitizer/Sanitizer.js";

//This basically runs tests on every module
export class FistViewT extends Comet{
    constructor(){
        super();
        this.comet("sometest from FileView");
        this.run_tests();
    }

    run_tests(){
        console.log('running tests')
        this.fist();
        this.quantality();
        this.clusivity();
        this.positionality();
    }
    fist(){
        var fist = new Fist();
        var file='./tests/fist.file'
        fist.pound(file);
    }

    quantality(){
        this.comet('quantality()')
        this.comet(
            true,
            `Quantality is evaluated right after positionality for an outgoing transaction
                which means it is only a single value that represents where from
                the start of positionality one wants to extend in the amount of data sent
            `,
            `Quantality represents the amount of data flowing from file a to file b`,
            `FistView.quan(tality) ACCEPTS end, mid, percentages (strings), +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, 0.5, 1b, 5% \n`,
            `FistView.quan(tality) RETURNS {tality:''} \n`
        )
        var positives=[ 
            "in:1", "in:0.0001", "in:1.0e400-34", "in:0.001e-34+45", "in:0.001e34+45", "in:55e-4",
            "in:55e-4-31", "in:55e-4+31", "in:55e+4+31", "in:55e4+31", "in:1000bin", "in:400nib",
            "in:20342mb", "in:342gb", "in:23424tb", "in:end", "in:mid", "in:beg", "in:mid-432bin",
            "in:mid-432nib","in:mid-432mb", "in:mid-432gb","in:mid-432tb","in:mid-432eb","in:mid+432bin",
            "in:mid+432nib", "in:mid+432mb", "in:mid+432gb", "in:mid+432tb", "in:mid+432eb", "in:mid/432bin",
            "in:mid/432nib", "in:mid/432mb", "in:mid/432gb", "in:mid/432tb", "in:mid/432eb", "in:mid*432bin",
            "in:mid*432nib","in:mid*432mb", "in:mid*432gb","in:mid-432tb", "in:mid-432eb", "in:beg",
            "in:mid*432tb", "in:mid*432eb", "in:mid-432bin", "in:mid-432nib", "in:mid-432mb", "in:mid-432gb",
            "in:5%", "in:0.5", "in:0.0001", "ex:0.0001","ex:1","ex:0.0001", "ex:1.0e400-34", "ex:0.001e34+45",
            "ex:0.001e-34+45", "ex:55e-4+31", "ex:55e-4-31", "ex:1000bin", "ex:400nib", "ex:20342mb",
            "ex:342gb", "ex:23424tb", "ex:end", "ex:mid", "ex:beg", "ex:5%", "ex:0.5", "ex:4mb", "ex:mid-432mb",
            "ex:mid-432gb", "ex:mid-432nib", "ex:mid+432nib", "ex:mid+432gb", "ex:mid+432mb"
        ]
        var sanitizer = new Sanitizer()

        positives.forEach(expression => {
            console.log(sanitizer.sanitize(expression, 'tality'))
            if(!sanitizer.sanitize(expression)){
                throw Error("uncaught expression")
            }
        });
    }

    clusivity(){
        this.comet('clusivity()')

        this.comet(
            true,
            `This is evaluated after positionality and quantality provide a begining and end anchor
                we can use beg, mid, and end to denote how much of the outgoing buffer should be shared
                with the original source. This is a colon separated triplet. The first element is the
                clusivity (in or ex), the second is beg or mid anchor expressions, the third is relative
                to the first in the way of a value, or can be anchored by end and used with expressions
            `,
            `FistView.clus(ivity) ACCEPTS beg, end, mid, percentage strings, +-*/ ops \n`, 
            `Example: 1b, 2mb, 14gb, etc. (prefixed with in or ex or just in or ex) 
             in:position:offset or in:0.5, or in:1b, or in:end, in:mid, in:beg (for future?) 
             ex:5% \n`,
            `FistView.clus(ivity) RETURNS {ivity:'', n:'', m:''}`
       )
        
    var positives = [
            "in:1", "in:0.0001", "in:1.0e400-34", "in:0.001e-34+45", "in:0.001e34+45", "in:55e-4",
            "in:55e-4-31", "in:55e-4+31", "in:55e+4+31", "in:55e4+31", "in:1000bin", "in:400nib",
            "in:20342mb", "in:342gb", "in:23424tb", "in:end", "in:mid", "in:beg", "in:mid-432bin",
            "in:mid-432nib","in:mid-432mb", "in:mid-432gb","in:mid-432tb","in:mid-432eb","in:mid+432bin",
            "in:mid+432nib", "in:mid+432mb", "in:mid+432gb", "in:mid+432tb", "in:mid+432eb", "in:mid/432bin",
            "in:mid/432nib", "in:mid/432mb", "in:mid/432gb", "in:mid/432tb", "in:mid/432eb", "in:mid*432bin",
            "in:mid*432nib","in:mid*432mb", "in:mid*432gb","in:mid-432tb", "in:mid-432eb", "in:beg",
            "in:mid*432tb", "in:mid*432eb", "in:mid-432bin", "in:mid-432nib", "in:mid-432mb", "in:mid-432gb",
            "in:5%", "in:0.5", "in:0.0001", "ex:0.0001","ex:1","ex:0.0001", "ex:1.0e400-34", "ex:0.001e34+45",
            "ex:0.001e-34+45", "ex:55e-4+31", "ex:55e-4-31", "ex:1000bin", "ex:400nib", "ex:20342mb",
            "ex:342gb", "ex:23424tb", "ex:end", "ex:mid", "ex:beg", "ex:5%", "ex:0.5", "ex:4mb", "ex:mid-432mb",
            "ex:mid-432gb", "ex:mid-432nib", "ex:mid+432nib", "ex:mid+432gb", "ex:mid+432mb"
        ]

        var sanitizer = new Sanitizer()

        positives.forEach(expression => {
            console.log(sanitizer.sanitize(expression))
            if(!sanitizer.sanitize(expression, 'ivity')){
                throw Error("uncaught expression")
            }
        });
    }

    positionality(){
        this.comet('positionality()')

        this.comet(
            true,
            `Positionality is evaluated first! It uses the entire file capacity to determine position`,
            `FistView.position(ality) ACCEPTS beg, end, mid (strings), percentages, +-*/ ops \n`, 
            `Examples: 1b, 2mb, 14gb, etc. or 0.5, or 100b, or 5% or beg, end, beg+10b, mid-100mb, etc`,
            `FistView.position(ality) RETURNS {ality:''}`
        )


        var positives=[
            'end', 'end-1b', 'end-1mb', 'end-10tb',
            'end/5b', 'end/2mb', 'end/46gb', 'end/50tb',
            'beg', 'beg+2b', 'beg+3gb', 'beg+4tb',
            'beg*5b', 'beg*2mb', 'beg*46gb', 'beg*50tb',
            'mid', 'mid+3b', 'mid+10mb', 'mid+1000gb', 'mid+10tb',
            'mid-5b', 'mid-100mb', 'mid-100gb', 'mid-10tb',
            'mid/5b', 'mid/10mb', 'mid/2gb', 'mid/100tb',
            'mid+0.5', 'end+0.05', 'beg*0.003', 'beg/0.0005','mid*0.0000003', //some of these would be wrong in validation, but not sanitization
            'mid*0.3e9', 'beg+0.4e_10', 'end+4e40', 'end-30e_3', 'mid+1e100',
            '1b+end', '2+mid', 'mid+2'
        ]
        var sanitizer = new Sanitizer()

        positives.forEach(expression => {
            console.log(sanitizer.sanitize(expression, 'ality'))
            if(!sanitizer.sanitize(expression)){
                throw Error("uncaught expression")
            }
        });

        var negatives=[

        ]

    } 
}
