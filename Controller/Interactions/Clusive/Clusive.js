import { _Clusive_ } from "../../Internals/_Interactions_/_Clusive_/_Clusive_";
export class Clus{
    constructor(ivity, n, m){
        this.clusivity;
        this.n=n;
        this.m=m;
        this._clusive_ = new _Clusive_()
        if (ivity=="in"){
            this.clusivity = ivity;
        }else if (ivity=="ex"){
            this.clusivity = ivity;
        }else{
            this.clusivity="in"
        }
        
    }
    get_clusivity(){
        return this.clusivity;
    }
    clusivity(source_path){
        //checks clusivity and performs in or ex operation with proper parameters
        if(this.clusivity=='in'){
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