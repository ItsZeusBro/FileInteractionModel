import * as fs from "node:fs"
export class File{
    constructor(file){
        File.prototype.flow = this.flow;
        File.prototype.stream = this.stream;
        this.pre;
        this.post;
        this.fN=file
        this.fd=this.getFile(file)
    }
    getFile(file){
        console.log(file)
        return fs.openSync(file, 'w')
    }
    checkFile(){
        if(fs.existsSync(this.fN)){
            return true
        }
    }
    flow(b, quant, exclsv, p1, p2, pre, post){
        var is_file = this.checkFile()
        if(is_file){        
            fs.writeFileSync(this.fN, "something")
        }
        return b;
    }
    stream(b, quant, p1, p2, pre, post){
        b.file.scripts(pre, post)
        return b;
    }
    scripts(pre, post){
        this.pre = pre;
        this.post = post;
    }
}