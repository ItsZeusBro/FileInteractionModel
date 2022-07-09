export class Quantality{
    constructor(){
    }
    isTality(string){
        var spacedOut=string.split(' ').join('')
        var talityReg = new RegExp(/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g);
        return {"matches":spacedOut.match(talityReg), "spacedout":spacedOut, "original":string}
    }
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    talityTok(){
        //gets the next token in the ality string
    }
    talityTokenize(){
        //gets all tokens in the ality string
    }
}