export class GoodyBag{
    isPath(path){
        if(!fs.existsSync(path)){
            return false
        }else{
            return true
        }
    }
    isInt(n){
        return Number(n) === n && n % 1 === 0;
    }
    isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    isString(n){
        return ((typeof n === 'string') || (n instanceof String))
    }
    isInfinite(n){
        
    }
     
    isObject(a){
        this.comet('FistPrims.isObject')
        return (!!a) && (a.constructor === Object);
    };

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
 
}

export const BIN = 1;
export const NIB = 4;
export const B = 8;
export const MB = 1000000; //everything is measured in bits including Mega's
export const GB = 1000000000;
export const TB = 1000000000000;
export const PB = 1000000000000000;
export const EB = 1000000000000000000;
export const E = 'e';
export const BEG = 0; //not a dummy in decimal
export const MID = 32304218725403733315174624633; //"half a dummy" in decimal is only half as dumb! Way bigger!
export const END = 431466835321; //"dummy" in decimal