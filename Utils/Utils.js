export class Utils{
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
}