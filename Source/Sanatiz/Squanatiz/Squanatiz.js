export class Squanatiz{
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*

    constructor(){
        this.ities = [
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g,
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]
        this.tality=/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g

    }
    sanat(tality){
        var talities=[]
        if(this.re(tality)){
            talities=this.tokity(tality)
        }
        return this.iz(talities)
    }
    iz(talities){
        var iztality={}

        //returns an object that the rest of the program can consume

        return iztality
    }
    re(tality){
        var spacedOut=tality.split(' ').join('')
        var talityReg = new RegExp(this.tality);
        return {"matches":spacedOut.match(talityReg), "spacedout":spacedOut, "original":tality}
    }
    tokity(tality){
        this.ities.forEach(ity => {
            
        });
    }
    tok(ity){
        //gets the next token in the ity string

    }
}