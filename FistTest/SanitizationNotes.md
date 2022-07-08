# Sanitization of Position-ality Requirements:
    
    this.ality = new RegExp("((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\\|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*", 'g');
    
### Notes:

This is a general pattern that we use for both Positionality and Quantality, in that "the number of bits that can be sent" can be represented the same way as "the position of bits from the begining of a buffer".
pattern:
(type of number)[multiplier][ops]((type of number)[multiplier][ops])*


# Quan-tality Sanitization Requirements:

    this.tality = new RegExp("((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\\|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*", 'g');

### Notes:

This is a general pattern that we use for both Positionality and Quantality, in that "the number of bits that can be sent" can be represented the same way as "the position of bits from the begining of a buffer".
pattern:
(type of number)[multiplier][ops]((type of number)[multiplier][ops])*


### Positionality and Quantlity Tests:
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



# Clus-ivity Sanitization Requirements:

    this.ivity = new RegExp("((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\\|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)", 'g');

### Notes:
(in|ex):((type of number)[multiplier][ops]((type of number)[multiplier][ops]))*

