export class Clusivity{
    constructor(string){
        //if we don't catch it throw an exception
        this.ivity = new RegExp("\\b((in|ex):((end|mid|beg)|(([0-9][0-9]*)))((\\+|\\-|\\/|\\\|\\*|bin|nib|mb|gb|tb|eb|%|\\.)?)(([0-9][0-9]*)?)((bin|nib|mb|gb|tb|eb|%)?)((e(([1-9][0-9]*(\\+|\\-|\\/|\\\|\\*)?([1-9][0-9]*)?)|((((\\+|\\-|\\/|\\\|\\*)[1-9][0-9]*)?)(\\+|\\-|\\/|\\\|\\*)?([1-9][0-9]*)?)|()))?))\\b", 'g');
    }

}

