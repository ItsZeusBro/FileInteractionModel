//INTERFACE
import * as fs from "node:fs"
import {_File_} from "../../Internals/_File_/_File_.js"
export class File{
    constructor(path, post){
        File.prototype.flow = this.flow;
        File.prototype.stream = this.stream;
        this._file_ = _File_(path, post)    //File business logic
    }


    mkdr(...paths){

      }
  
      create(...paths){

      }
  
      rename(olP, newP){

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