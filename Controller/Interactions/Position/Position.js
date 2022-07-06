import { _Position_ } from "../../../Internals/_Interactions_/_Position_/_Position_";
export class Position{
    constructor(at){
        this._position_= new _Position_()
        this.at=this.whodat(at)
        this.fd;
    }
    whodat(at){
        //'at:b' or 'at:e' or 'b' or 'e' or 'at:n', or n, or undefined
        if(isInteger(at)){
            return at
        }else{
            if(at==('at:b'|'at:e'|'b'|'e')){
                if(at==('b')){
                    return Number.NEGATIVE_INFINITY
                }
                if(at==('e')){
                    return Number.INFINITY
                }else{
                    at = at.split(':')
                    this.whodat(at[1]) 
                    //we know its an b or e, so just use recursion
                }
            }
        }
    }
}