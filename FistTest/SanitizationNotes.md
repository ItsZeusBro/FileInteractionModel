# Sanitization of Position-ality Requirements:
    this.ality = new RegExp("\\b(((end|beg|mid)((\\-|\\+|\\*|\\\\|\\/)?)((([1-9][0-9]*)?)(bin|nib|b|mb|gb|tb|%))?)(([1-9][0-9]*e[1-9][0-9]*((\\-|\\+|\\*|\\\\|\\/)[1-9][0-9]*)?)?)(([1-9][0-9]*e_[1-9][0-9]*((\\-|\\+|\\*|\\\\|\\/)[1-9][0-9]*)?)?)((0.[0-9][0-9]*((\\-|\\+|\\*|\\\\|\\/)[1-9][0-9]*)?)?)((e[1-9][0-9]*((\\-|\\+|\\*|\\\\|\\/)[1-9][0-9]*)?)?)((e_[1-9][0-9]*((\\-|\\+|\\*|\\\\|\\/)[1-9][0-9]*)?)?)(([1-9][1-9]*)?))\\b", 'g');

    
### Notes:

# Sanitization of Clus-ivity Requirements:
    
    this.ivity = new RegExp("\\b((in|ex):((end|mid|beg)|(([0-9][0-9]*)))((\\+|\\-|\\/|\\*|\\\|bin|nib|mb|gb|tb|eb|%|\\.)?)(([0-9][0-9]*)?)((bin|nib|mb|gb|tb|eb|%)?)((e(([1-9][0-9]*(\\+|\\-|\\/|\\\|\\*)?([1-9][0-9]*)?)|((((\\+|\\-|\\/|\\\|\\*)[1-9][0-9]*)?)(\\+|\\-|\\/|\\\|\\*)?([1-9][0-9]*)?)|()))?))", 'g');

### Notes:

# Sanitization of Quan-tality Requirements:
  
    this.tality = new RegExp("([0-9]*\\.[0-9]*e[0-9]* ?-?([0-9]*)?(bin|b|mb|gb|tb|pb|eb) ?\\+? ?[0-9]*(bin|b|mb|gb|tb|pb|eb))|(((((mid|beg|end) ?(\\+|\\-|\\*|\\\|\\/|\\b) ?\\b)([0-9]*\\.[0-9]*)?((e[0-9]*)|[0-9]*)?)|([0-9]*\\.[0-9]*)) ?-?%?(bin|b|mb|gb|tb|pb|eb)?[0-9]* ?(bin|b|mb|gb|tb|pb|eb)? ?\\+? ?([0-9]*(bin|b|mb|gb|tb|pb|eb))?)|([0-9]*\\.?([0-9]*)?)%?", 'g');
    


### Notes:
#### For Quantality we wish to pattern match any of the following patterns (add more if needed):

(type of number)[multiplier][ops]((type of number)[multiplier][ops])* //star is optional behavior

[optional behavior]
(mandatory)


### Positive Quantlity Regex Tests:
- 0.0005003e6 mb+ 10bin 
- 0.0005000e6 b+4b 
- 43.0005e6 -12mb +10mb 
- 25.0505e-5bin+ 4gb 
- 0.0005e6 mb + 10tb 
- 0.0005e6 b + 4pb
- 0.0005e6 gb + 10eb 
- 0.05
- 1
- 500
- 0.05%
- 5%
- mid+0.0005003e6 mb
- mid+0.0005000e6 b+4b
- mid-5%
- beg+25.0505e-5bin+ 4gb
- end-0.0005e6 b + 4pb
- mid-5%
- beg+2gb
- end-4gb
- end
- mid
- beg

### Negative Quantlity Regex Tests:
- end+25.0505e-5bin+ 4gb
- beg-25.0505e-5bin+ 4gb
- mid+-25.0505e-5bin+ 4gb

# Sanitization for Algebraic Expressions (for the future)
#### We just care for now about sanitizing this type of expression (validation, specification, and interfacing comes later)
