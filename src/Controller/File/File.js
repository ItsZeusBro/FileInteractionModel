//FILE INTERFACE API, and CONTROLLER API
import {_File_} from "../../Internals/_File_/_File_.js"
export class File{
    constructor(path){
        console.log("File(path)")
        this._file_ = _File_(path)    //File business logic goes underneath the hood

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