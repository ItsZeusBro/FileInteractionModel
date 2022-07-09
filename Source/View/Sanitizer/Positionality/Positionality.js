export class Positionality{
    constructor(){
    }
    isAlity(string){
        var spacedOut=string.split(' ').join('')
        var alityReg = new RegExp(/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g);
        return {"matches":spacedOut.match(alityReg), "spacedout":spacedOut, "original":string}
    }
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    alityTok(){
        //gets the next token in the ality string
    }
    alityTokenize(){
        //gets all tokens in the ality string
    }
}
