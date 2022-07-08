export class Quantality{
    constructor(string){
        this.tality = new RegExp("(\b(((0\.[0-9]*)|([1-9][0-9]*%)|([1-9][0-9]*)|(([0-9]*\.[0-9]*))|((mid|end|beg) ?\+?\-?\\?\*?)\s?)(e|bin|b|mb|gb|tb|pb|eb)?([1-9]?[0-9]*%?\s?\-?)((bin|b|mb|gb|tb|pb|eb)?)(((\s|\+)?(\s?\+?\s?)))))\b");

    }

    sanitize(){

    }

}
