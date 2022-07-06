import {_Flow_} from "../_Flow_/_Flow_.js.js"
import {_Stream_} from "../_Stream_/_Stream_.js.js"
import {_Script_} from "../_Sexy_Transactions_/_Script_/_Script_.js"
import * as fs from "node:fs"

//FILE BUSINESS LOGIC
class _File_{
    constructor(path){
      console.log("_File_(path)")
      this.path=path

    }



    mkdr(...paths){
        this.comet('FistPrims.mkdr')
        for (const dir of paths) {
          try{
            if(!fs.existsSync(dir)){
              fs.mkdirSync(dir)
            }
          }catch{
            return false
          }
        }
      }
  
      create(...paths){
        this.comet('FistPrims.create')
        for (const p of paths) {
          try{
            fs.closeSync(fs.openSync(p, 'w'))
          }catch{
            return false
          }
        }
      }
  
      rename(olP, newP){
        this.comet('FistPrims.rename')
        try{
          fs.renameSync(olP, newP)
        }catch{
          return false
        }
      }
  
      copyAppend(a, b){
        this.comet('FistPrims.copyAppend')
        try{
          if(fs.existsSync(a)&&fs.existsSync(b)){
            var buff = fs.readFileSync(a)
            fs.appendFileSync(b, buff)
          }
        }catch{
          return false
        }
      }
  
      truncate(p, n){
        this.comet('FistPrims.truncate')
          try{
            if(fs.existsSync(p)){
              fs.truncateSync(p, n)
            }
          }catch{
            return p
          }
      }
  
      del(p){
        this.comet('FistPrims.del')
          try{
            if(fs.lstatSync(p).isDirectory()){
              fs.rmSync(p, {recursive:true})
            }else{
              if (fs.existsSync(p)){
                fs.unlinkSync(p)
              }
            }
          }catch{
            return false
          }
      }
  
      write(p, data){
        this.comet('FistPrims.write')
        if(Buffer.isBuffer(data)){
            fs.writeSync(fs.openSync(p, 'a'), data)
        }else{
            fs.writeSync(fs.openSync(p, 'a'), Buffer.from(data))
        }
      }
  
      overwrite(p, data){
        this.comet('FistPrims.overwrite')
        if(Buffer.isBuffer(data)){
          if (fs.existsSync(p)){
              fs.writeSync(fs.openSync(p, 'w'), data)
          }
        }else{
          if(fs.existsSync(p)){
            fs.writeSync(fs.openSync(p, 'w'), Buffer.from(data))
          }
        }
      }
  
      read(p){
        this.comet('FistPrims.read')
        if(fs.existsSync(p)){
          return fs.readFileSync(p)
        }
      }
  
      isObject(a){
        this.comet('FistPrims.isObject')
        return (!!a) && (a.constructor === Object);
      };
}