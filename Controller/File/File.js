//FILE INTERFACE API, and CONTROLLER API
import * as fs from "node:fs"
import {_File_} from "../../Internals/_File_/_File_.js"
export class Fist{
    constructor(path, post){

        this._file_ = _File_(path, post)    //File business logic goes underneath the hood
    }


    //CONTROLLER
    mkdr(path){

    }
  
    create(path){

    }

    rename(oldP, newP){

    }

    copyAppend(a, b){

    }

    truncate(p, n){

    }

    del(p){

    }

    write(p, data){

    }

    overwrite(p, data){

    }

    read(p){

    }

}