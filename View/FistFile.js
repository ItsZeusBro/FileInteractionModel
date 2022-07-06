//INTERFACE Tests

// String.prototype.flow = function(some){
//     console.log(this)
//     return new File(this).flow(some)
// }

class FistFile{
    constructor(){
        Fist.prototype.flow = this.flow;
        Fist.prototype.stream = this.stream;
    }

    flow(){

    }

    stream(){
        
    }

}

//'./some'.flow("some/other/path/to/file", (data)=>{console.log(data)}).flow("some/third/path/to/file")