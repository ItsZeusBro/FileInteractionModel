export class Sclusatiz{
    //(in|ex):(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.ities[
            /(in|ex):/g, 
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g, 
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]
        this.ivity=/((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g

    }
    sanat(ivity){
        var ivities=[]
        if(this.re(ivity)){
            ivities.push(this.tokity(ivity))
        }
        return this.iz(ivities)
    }
    iz(ivities){
        var izivity={}
        //returns an object that the rest of the program can consume

        return izivity
    }

    re(ivity){
        var spacedOut=ivity.split(' ').join('')
        var ivityReg = new RegExp(this.ivity);
        return {"matches":spacedOut.match(ivityReg), "spacedout":spacedOut, "original":ivity}
    }

    tokity(ivity){
        //gets all tokens in the ivity string
    }

    tok(ity){
        //gets the next token in the ity string
    }




}