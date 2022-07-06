export class _Clus{
    //keep these low level functions pure
    //do not keep a constructor or state
    //unless you absolutely have to
    constructor(ivity_, sourcepath, n, m){
        this.sourcepath=sourcepath;
        this.ivity_=ivity_;
        this.n=n;
        this.m=m;
    }
    //they call this function
    ivity(){
        if(this.ivity_=='ex'){
            return this.ex()
        }else if (this.ivity_=='in'){
            return this.in()
        }
    }

    ex(){
        if (this.n && this.m){
            this._ex_range_(this.sourcepath, this.n, this.m)
        }else if(this.n){
            this._ex_n_(this.sourcepath, this.n)
        }else if(this.m){
            this._ex_m_(this.sourcepath, this.m)
        }else{
            this._ex_(this.sourcepath)
        }
    }
    in(){
        if (this.n && this.m){
            this._in_range_(this.sourcepath, this.n, this.m)
        }else if(n){
            this._in_n_(this.sourcepath, this.n)
        }else{
            this._in_m_(this.sourcepath, this.m)
        }
        //inclusive without n or m does nothing to the source file
    }
    _ex_range_(){

    }
    _ex_n_(){

    }
    _ex_m_(){

    }
    _ex_(){

    }

    _in_range_(){

    }
    _in_n_(){

    }
    _in_m_(){

    }
}