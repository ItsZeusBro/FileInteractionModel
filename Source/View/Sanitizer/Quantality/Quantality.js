export class Quantality{
    //(type of number)[multiplier][ops]((type of number)[multiplier][ops])*

    constructor(){
        this.ities = [
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g,
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]

    }
    sanit(tality){
        var talities=[]
        if(this.is(tality)){
            talities=this.tokity(tality)
        }
        return this.iz(talities)

    }
    iz(talities){
        //returns an object that the rest of the program can consume
    }
    is(tality){
        var spacedOut=wouldbtality.split(' ').join('')
        var talityReg = new RegExp(/(((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g);
        return {"matches":spacedOut.match(talityReg), "spacedout":spacedOut, "original":wouldbtality}
    }
    tokity(tality){
        this.ities.forEach(ity => {
            
        });
    }
    tok(ity){
        //gets the next token in the ity string

    }


}