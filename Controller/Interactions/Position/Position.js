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
                    return -Infinity
                }
                if(at==('e')){
                    return Infinity
                }else{
                    at = at.split(':')
                    this.whodat(at[1]) 
                    //we know its an b or e, so just use recursion
                }

            }
        }
    }

    //this should get us a file descriptor at the required position
    at(path){
        this.fd = this._position_.at(path, this.at)
    }
}