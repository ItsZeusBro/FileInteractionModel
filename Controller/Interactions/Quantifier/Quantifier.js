import { _Quantifier_ } from "../../Internals/_Quantifier_/_Quantifier_";
export class Quantifier{
    //this controls the flow of the data going out of the file in the number of bytes, etc.
    //Its either "All", "Half", or something concrete like "2"
    constructor(q){
        this.q;
        if(q=='all' || q=='All' || q=='ALL'){
            this.q = Infinity;

        }else if(q=="Half"||q==0.5||q=="HALF"||q=="half"){
            this.q = 0.5;
        }else if(isInteger(q)){
            this.q = q
            //check if integer
        }else{
            throw Error("Invalid Quantifier")
        }
    }

}