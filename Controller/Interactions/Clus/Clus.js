import { _Clusive_ } from "../../Internals/_Interactions_/_Clusive_/_Clusive_";
export class Clus{
    constructor(sourcepath, ivity){
        this.sourcepath
        this.ivity;
        this.n;
        this.m;
        this._Clusive_;
        this.clus(ivity);
        
    }
    clus(ivity){
        //clsvty is expected to be like 'in:n:m'
        this.look4clues(ivity)
        this._Clusive_ = new _Clusive_(this.ivity, this.n, this.m)
    }

    look4clues(ivity){
        var clues;
        try{
            var iv = ivity.split(':');
            if(iv[0]!='in' && inv[0]!='out'){
                throw Error("bad inclusivity option")
            }else{
                this.ivity=iv.pop(0)
            }
            if(!isInteger(iv[0])&&!isInteger(iv[1])){
                throw Error("bad inclusivity option")
            }else{
                try{
                    this.n=iv.pop(0)
                }
                try{
                    this.m=iv.pop(0)
                }catch{
                    this.m=undefined
                }
            }
        }catch{
            if(ivity!='in' && ivity!='out'){
                throw Error("bad inclusivity option")
            }else{
                this.ivity=ivity
            }
        
        }
        
        return
    }

    
}