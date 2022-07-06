import { _Stream_ } from "../../Model/_Sexy_Transactions_/_Stream_/_Stream_.js"
export class Stream{
    constructor(){
        this._Stream_ = new _Stream_()
    }
    stream(b, q, pin, pout, pre, post){
        this._Stream_._stream_(b, q, pin, pout, pre, post)
        return
    }

}