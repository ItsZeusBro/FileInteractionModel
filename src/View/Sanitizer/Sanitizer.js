export class Sanitizer{
    constructor(string, context){
        if (context == 'positionality'){

        }else if (context == 'quantality'){

        }else if (context == 'clusivity'){

        }else{
            throw Error("invalid context for sanitizer")
        }
    }
}