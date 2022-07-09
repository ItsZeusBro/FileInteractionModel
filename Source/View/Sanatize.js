
export class Sanatize{
    constructor(){
        this.binalities = {
            "bit":BIT,"kbit":KBIT,"mbit":MBIT, "gbit":GBIT, "tbit":TBIT, "pbit":PBIT, "ebit":EBIT,
            "mid":MID, "beg":BEG, "end":END
        };
        this.ality= /(^((\+|\-)?((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)((?!\*\*)(\*|\+|\-|\\|\/)?(\+|\-)?(((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)?)*)/g;
        this.tality= /(^((\+|\-)?((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)((?!\*\*)(\*|\+|\-|\\|\/)?(\+|\-)?(((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)?)*)/g;
        this.ivity= /(in|ex):(^((\+|\-)?((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)((?!\*\*)(\*|\+|\-|\\|\/)?(\+|\-)?(((beg|end|mid)|([0-9]*\.?[0-9]*e\+?\-?[0-9]*)|([0-9]*\.[0-9]*)|(bin|bit|kbit|mbit|gbit|tbit|pbit|ebit)|([0-9]*))%?)?)*)/g;
    }
    sanatize(sPosaQuanaClus, context){
        sPosaQuanaCllus = this.regularize(sPosaQuanaClus, context);

    }
    regularize(sPosaQuanaClus, context){
        if (context == 'positionality'){
            return this.scientize(this.match(this.ality, sPosaQuanaClus, context))
        }else if (context == 'quantality'){
            return this.scientize(this.match(this.tality, sPosaQuanaClus, context))
        }else if (context == 'clusivity'){
            return this.scientize(this.match(this.ivity, sPosaQuanaClus, context))
        }else{
            throw Error("invalid context for sanitizer")
        }
    }
    match(reg, sPosaQuanaClus, context){
        var reg = new RegExp(reg);
        var match;
        try{
            var spacedOut=sPosaQuanaClus.split(' ').join('');
            match = spacedOut.match(reg)[0];
        }catch{
            throw Error(context+" is not properly formatted")
        }
        return match;
    }
    scientize(sPosaQuanaClus){
        var spacedOut=sPosaQuanaClus.split(' ').join('');
        match = this.match(sPosaQuanaClus);
        var scientized;
        var reg= new RegExp(ANYTHING_SCIENTIFIC)
        try{
            reg.exec(match).forEach(scientality => {
                if(JSON.stringify(new Number(scientality))){
                    scientized = match.replace(reg, new Number(scientality))
                }
            });
            return scientized
        }catch{
            return sPosaQuanaClus
        }
    }
}