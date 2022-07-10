import { BIT, KBIT, MBIT, GBIT, TBIT, PBIT, EBIT, MID, BEG, END} from "../../../Drawer/Junk.js";
import {ANYTHING_SCIENTIFIC} from "../../../../../MagicSpells/MagicSpells.js";
import {_Clus} from "../_ClusIvity/_Clus.js";
import {_Quan} from "../_QuanTality/_Quan.js"
import {_Position} from "../_PositionAlity/_Position.js"

export class _Sanatize{

    constructor(){
        this._binalities = {
            "bit":BIT,"kbit":KBIT,"mbit":MBIT, "gbit":GBIT, "tbit":TBIT, "pbit":PBIT, "ebit":EBIT,
            "mid":MID, "beg":BEG, "end":END
        };
        this._Clus= new _Clus();
        this._Quan= new _Quan();
        this._Position= new _Position();
        
    }

    _sanatize(_sPosaQuanaClus, _context){
        _sPosaQuanaClus = this._regularize(_sPosaQuanaClus, _context);
    }

    _binatize(){
        
    }

    _regularize(_sPosaQuanaClus, _context){
        if (_context == 'positionality'){
            console.log(_sPosaQuanaClus)
            return this._binatize(this._scientize(this._match(this._Position._ality, _sPosaQuanaClus, _context)));
        }else if (_context == 'quantality'){
            return this._binatize(this._scientize(this._match(this._Quan._tality, _sPosaQuanaClus, _context)));
        }else if (_context == 'clusivity'){
            return this._binatize(this._scientize(this._match(this._Clus._ivity, _sPosaQuanaClus, _context)));
        }else{
            throw Error("invalid context for sanitizer");
        }
    }

    _match(_reg, _sPosaQuanaClus, _context){
        console.log("MATCH",_reg, _sPosaQuanaClus, _context)
        _reg = new RegExp(_reg);
        var _match;

        _sPosaQuanaClus =_sPosaQuanaClus.split(' ').join('');
        _match = _sPosaQuanaClus.match(_reg)


        return _match;
    }

    _scientize(_sPosaQuanaClus){
        _sPosaQuanaClus=_sPosaQuanaClus.split(' ').join('');
        var _match = this.match(_sPosaQuanaClus);
        var _scientized;
        var _reg= new RegExp(ANYTHING_SCIENTIFIC);
        try{
            _reg.exec(_match).forEach(_scientality => {
                if(JSON.stringify(new Number(_scientality))){
                    _scientized = _match.replace(_reg, new Number(_scientality));
                }
            });
            return _scientized;
        }catch{
            return _sPosaQuanaClus;
        }
    }
}