export class _Clusive_{
    //keep these low level functions pure
    //do not keep a constructor or state
    //unless you absolutely have to
    constructor(sourcepath, ivity, n, m){
        this.sourcepath=sourcepath;
        this.ivity=ivity;
        this.n=n;
        this.m=m;
    }

    ex(){
        if (this.n && this.m){
            this._ex_range(this.sourcepath, this.n, this.m)
        }else if(this.n){
            this._ex_n(this.sourcepath, this.n)
        }else if(this.m){
            this._ex_m(this.sourcepath, this.m)
        }else{
            this._ex(this.sourcepath)
        }
    }
    in(){
        if (this.n && this.m){
            this._in_range(this.sourcepath, this.n, this.m)
        }else if(n){
            this._in_n(this.sourcepath, this.n)
        }else{
            this._in_m(this.sourcepath, this.m)
        }
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