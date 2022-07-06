export class Flow{
    constructor(){

    }
    flow(b, q, clusivity, pin, pout, pre, post){
        this._file_.flow(b, q, clusivity, pin, pout, pre, post)
        return b;
    }

}