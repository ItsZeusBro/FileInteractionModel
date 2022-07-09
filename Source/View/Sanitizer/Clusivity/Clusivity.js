export class Clusivity{
    constructor(){
        this.tokens[
            /(in|ex):/g, 
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g, 
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]
    }

    isIvity(wouldbivity){
        var spacedOut=wouldbivity.split(' ').join('')
        var ivityReg = new RegExp(/((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g);
        return {"matches":spacedOut.match(ivityReg), "spacedout":spacedOut, "original":string}
    }

    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    ivityTok(ity){
        //gets the next token in the ality string
    }
    ivityTokenize(wouldbivity){
        //gets all tokens in the ality string
    }
    sanitize(wouldbivity){
        
    }
}