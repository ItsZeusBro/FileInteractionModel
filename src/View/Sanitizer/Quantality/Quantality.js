export class Quantality{
    constructor(string){
        //CHECK EVERY MATCH FOR ONE THAT WORKS ON THE COMPLETE STRING (ALL OR NOTHING)
        this.tality = new RegExp("([0-9]*\\.[0-9]*e[0-9]*\\-?([0-9]*)?(bin|b|mb|gb|tb|pb|eb)\\+?[0-9]*(bin|b|mb|gb|tb|pb|eb))|(((((mid|beg|end)(\\+|\\-|\\*|\\\|\\/))([0-9]*\\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\\.[0-9]*))-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]*(bin|b|mb|gb|tb|pb|eb)?\\+?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)|([0-9]*\\.?([0-9]*)?)%?", 'g');
    }
    sanitize(){
    }
}


//((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\\|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*