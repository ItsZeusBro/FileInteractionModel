export class Positionality{
    constructor(string){
        //if we don't catch it throw an exception
        //pattern 
        // [end || mid || beg] || 
        // [+ || - || / || *] || 
        // [ [0-inf] && [ b || mb || gb || tb || %] || 
        // [0.0-1.0] || 
        // [ e && [ [ [_] && [0-inf] ] || [0-inf] ] ]
        this.tokens=[
            'end', 'mid', 'beg', 
            
            'b', 'mb', 'gb', 'tb', 
            
            '+', '/', '-', '*', 
            
            'e', '_', '%', '.']

    }
    search(string){

    }
    collect(){

    }
    atomEval(){

    }
    insert(){

    }
    compEval(){

    }
    sanitize(){
        
    }
}
        //2. search for longest keywords first (remember position in string),
        //3. collect its requirements (evaluate) from base string 
        //4. insert in value ordered array of objects (repeat)
        //5. evaluate compound expression
        //6. translate it to sanitized object
        //7. return sanitized object