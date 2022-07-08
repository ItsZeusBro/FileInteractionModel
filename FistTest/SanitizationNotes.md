# Sanitization of Positionality Requirements:
    
    const ALITY = new RegExp("((end|beg|mid)((-|\+|\*|\/)?)((([1-9][0-9]*)?)(bin|nib|b|mb|gb|tb|%))?)(([1-9][0-9]*e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][0-9]*e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((0.[0-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][1-9]*)?)");
    
### Notes:

    
# Sanitization of Clusivity Requirements:
    
    const IVITY = new RegExp("(in|ex):((end|mid|beg)|(([0-9][0-9]*)))((\+|-|\/|\*|bin|nib|mb|gb|tb|eb|%|\.)?)(([0-9][0-9]*)?)((bin|nib|mb|gb|tb|eb|%)?)((e(([1-9][0-9]*(\+|-)?([1-9][0-9]*)?)|((((-|\+)[1-9][0-9]*)?)(\+|-)?([1-9][0-9]*)?)|()))?)");

### Notes:

# Sanitization of Quantality Requirements:
    
    const TALITY = new RegExp()

### Notes:
#### For Quantality we wish to pattern match any of the following patterns (add more if needed):
- Numerical Expressions which include:
    - an integer bit expression tuple, 
    - a float, 
    - [1-100]%, 
    - a scientific notation alongside an integer bit expression tuple, 
    - an anchor that represents a relative value (beg, mid, end) to the buffer size.

- Bit Expression where N represents some numerical expression: 
    - n bin, 
    - n b, 
    - n mb, 
    - n gb, 
    - n tb, 
    - n pb, 
    - n eb

- Arithmetic expressions where n and m represent a Numerical expression
    - n+m 
    - n/m 
    - n*m 
    - n-m

    
