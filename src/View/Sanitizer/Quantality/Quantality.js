export class Quantality{
    constructor(string){
        this.tality = new RegExp("\\b((\\b(((0\\.[0-9]*)|([1-9][0-9]*%)|([1-9][0-9]*)|(([0-9]*\\.[0-9]*))|((mid|end|beg) ?\\+?\\-?\\\?\\*?\\/?)\\s?)(e|nib|bin|b|mb|gb|tb|pb|eb)?([1-9]?[0-9]*%?\\s?\\-?)((bin|nib|b|mb|gb|tb|pb|eb)?)(((\\s|\\+)?(\\s?\\+?\\s?))))))\\b", "g");
    }
    sanitize(){
    }
}
