export class Sposatiz{
    constructor(){
        this.ities = [
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g,
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]
        this.ality=/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g
    }
    sanit(ality){
        var alities=[]
        if(this.re(ality)){
            alities=this.tokity(ality)
        }
        return this.iz(alities)
    }
    iz(alities){
        var izality={}
        //returns an object that the rest of the program can consume

        return izality
    }

    re(ality){
        var spacedOut=ality.split(' ').join('')
        var alityReg = new RegExp();
        return {"matches":spacedOut.match(alityReg), "spacedout":spacedOut, "original":woudbality}
    }

    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    tok(ity){
        //gets the next token in the ality string
    }
    tokity(ality){
        //gets all tokens in the ality string
    }

}
