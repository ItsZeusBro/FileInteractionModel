export class Clus{
    constructor(ivity, n, m){
        this.clusivity;
        this.n=n;
        this.m=m;
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
            this._ex_range(source_path, n, m)
        }else if(n){
            this._ex_n(source_path, n)
        }else if(m){
            this._ex_m(source_path, m)
        }else{
            this._ex(source_path)
        }
    }
    in(source_path, n, m){
        if (n, m){
            this._in_range(source_path, n, m)
        }else if(n){
            this._in_n(source_path, n)
        }else{
            this._in_m(source_path, m)
        }
    }

    _ex_range(source_path, n, m){

    }
    _ex_n(source_path, n){

    }
    _ex_m(source_path, m){

    }
    _ex(source_path){

    }


    in_range(source_path, n, m){

    }
    in_n(source_path, n){

    }
    in_m(source_path, m){

    }
}