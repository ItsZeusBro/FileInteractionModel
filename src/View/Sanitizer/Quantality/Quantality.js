export class Quantality{
    constructor(string){
        this.tality = new RegExp("\\b((\\b(((0\\.[0-9]*)|([1-9][0-9]*%)|([1-9][0-9]*)|(([0-9]*\\.[0-9]*))|((mid|end|beg) ?\\+?\\-?\\\?\\*?\\/?)\\s?)(e|nib|bin|b|mb|gb|tb|pb|eb)?([1-9]?[0-9]*%?\\s?\\-?)((bin|nib|b|mb|gb|tb|pb|eb)?)(((\\s|\\+)?(\\s?\\+?\\s?))))))\\b", 'g');
    }
    sanitize(){
    }
}

//(((((mid|beg|end) ?(\+|\-|\b) ?\b)([0-9]*\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\.[0-9]*)) ?-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]* ?(bin|b|mb|gb|tb|pb|eb)? ?\+? ?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)|(([0-9]*\.[0-9]*)e)
//(((((mid|beg|end) ?(\+|\-|\b) ?\b)([0-9]*\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\.[0-9]*)) ?-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]* ?(bin|b|mb|gb|tb|pb|eb)? ?\+? ?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)|(([0-9]*\.?%?[0-9]*)e?([0-9]*)? ?\-?(bin|b|mb|gb|tb|pb|eb)?(\+|\-)? ?([0-9]*)?(bin|b|mb|gb|tb|pb|eb)?)



//(((((mid|beg|end) ?(\+|\-|\b) ?\b)([0-9]*\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\.[0-9]*)) ?-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]* ?(bin|b|mb|gb|tb|pb|eb)? ?\+? ?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)| //this one is good, just add the next to it