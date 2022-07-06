export class _Stream_{
    constructor(){
        
    }

    stream(b, quant, p1, p2, pre, post){
        //run the prescript on the file
        b._pre_.pre(pre);
        //stream the data to b
        this._stream_(b, quant, p1, p2);
        //run the postscript on the remainder of the file
        b._post_.post(post);
    }
    _stream_(b, quant, p1, p2){

    }
}