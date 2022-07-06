import { _Position_ } from "../../../Internals/_Interactions_/_Position_/_Position_";
export class Position{
    constructor(at){
        this._position_= new _Position_()
        this.at=at
        this.fd;
    }

    //this should get us a file descriptor at the required position
    at(path){
        this.fd = this._position_.at(path, this.at)
    }
}