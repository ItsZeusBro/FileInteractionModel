import { _Clusive_ } from "../../Internals/_Interactions_/_Clusive_/_Clusive_";
export class Clus{
    constructor(ivity){

        this.ivity;
        this.n;
        this.m;
        this._clusive_;
        this.clus(ivity);
        
    }
    clus(ivity){
        //clsvty is expected to be like 'in:n:m'
        var iv = ivity.split(':');
        this.ivity = iv.pop(0)
        this.n = parseInt(iv.pop(0))
        this.m = parseInt(iv.pop(0))
        this._clusive_ = new _Clusive_()
    }
    get_clusivity(){
        return this.ivity;
    }
    ivity(source_path){
        //checks clusivity and performs in or ex operation with proper parameters
        if(this.ivity=='in'){
            this.in(source_path, this.n, this.m)
        }else{
            this.ex(source_path, this.n, this.m)
        }
    }
    ex(source_path, n, m){
        if (n, m){
            this._clusive_._ex_range(source_path, n, m)
        }else if(n){
            this._clusive_._ex_n(source_path, n)
        }else if(m){
            this._clusive_._ex_m(source_path, m)
        }else{
            this._clusive_._ex(source_path)
        }
    }
    in(source_path, n, m){
        if (n, m){
            this._clusive_._in_range(source_path, n, m)
        }else if(n){
            this._clusive_._in_n(source_path, n)
        }else{
            this._clusive_._in_m(source_path, m)
        }
    }
}