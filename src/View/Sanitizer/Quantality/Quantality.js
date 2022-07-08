export class Quantality{
    constructor(string){
        //CHECK EVERY MATCH FOR ONE THAT WORKS ON THE COMPLETE STRING (ALL OR NOTHING)
        this.tality = new RegExp("([0-9]*\\.[0-9]*e[0-9]*\\-?([0-9]*)?(bin|b|mb|gb|tb|pb|eb)\\+?[0-9]*(bin|b|mb|gb|tb|pb|eb))|(((((mid|beg|end)(\\+|\\-|\\*|\\\|\\/))([0-9]*\\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\\.[0-9]*))-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]*(bin|b|mb|gb|tb|pb|eb)?\\+?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)|([0-9]*\\.?([0-9]*)?)%?", 'g');
    }
    sanitize(){
    }
}


//(mid|end|beg)|((((0\.|[0-9]*\.)[0-9]*e))(((\+|\-)[0-9]*((\+|\-|\*|\\|\/)[0-9]*(bin|nib|b|mb|gb|tb|pb|eb)?)*)|([0-9]*(((\+|\-|\*|\\|\/)[0-9]*(bin|nib|b|mb|gb|tb|pb|eb)?)*))))
//matches all of these:
//0.0005003e600+1mb+10bin-mb
//0.0005e4*3b+4pb
//0.0005e9/2gb+10eb
//43.0005e3+12/4mb+10mb
//25.0505e5+4bin+4gb
//0.0005e6+10tb

//0.0005000e-19*4b+4b+55555nib
//0.0005000e+19*4b+4b
//0.0005000e-19
//0.0005000e+19