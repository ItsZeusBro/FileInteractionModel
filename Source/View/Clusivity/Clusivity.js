export class Clusivity{
    //(in|ex):(type of number)[multiplier][ops]((type of number)[multiplier][ops])*
    constructor(){
        this.tokens[
            /(in|ex):/g, 
            /(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))/g, 
            /((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))/g
        ]
        this.regex=/((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\/|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)/g

    }
    sanatize(){

    }

    match(ivity){
        var spacedOut=ivity.split(' ').join('')
        var reg = new RegExp(this.ivity);
        return {"clusivity":spacedOut.match(reg), "original":ivity}
    }



}