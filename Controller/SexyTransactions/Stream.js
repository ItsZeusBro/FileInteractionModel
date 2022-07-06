export class Stream{
    constructor(){

    }
    stream(b, q, pin, pout, pre, post){
        this._file_.flow(b, q, pin, pout, pre, post)
        return b;
    }

}