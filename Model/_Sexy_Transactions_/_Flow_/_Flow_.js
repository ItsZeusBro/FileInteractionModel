export class _Flow_{
    constructor(){
        
    }
    flow(b, quant, exclsv, p1, p2, pre, post){
        //run the prescript on the file
        b._pre_.pre(pre);
        //flow the data to b
        this._flow_.flow(b, quant, exclsv, p1, p2);
        //run the postscript on the remainder of the file
        b._post_.post(post);
    }

} 