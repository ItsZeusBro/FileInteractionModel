export class Clusivity{
    //(in|ex):(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.ities[
            /(in|ex):/g, 
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g, 
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]

    }
    sanit(ivity){
        var ivities=[]
        if(this.is(ivity)){
            ivities.push(this.tokity(ivity))
        }
        return this.iz(ivities)
    }
    iz(ivities){
        //returns an object that the rest of the program can consume
    }

    is(ivity){
        var spacedOut=wouldbivity.split(' ').join('')
        var ivityReg = new RegExp(/((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g);
        return {"matches":spacedOut.match(ivityReg), "spacedout":spacedOut, "original":string}
    }

    tokity(ivity){
        //gets all tokens in the ivity string
    }

    tok(ity){
        //gets the next token in the ity string
    }




}