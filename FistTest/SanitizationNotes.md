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


### Negative Quantlity Regex Tests:


//we need a lot more tests

# Clus-ivity Sanitization Requirements:

    this.ivity = new RegExp("((in|ex):((((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|nib|b|mb|gb|tb|pb|eb))((\*|\\|\-|\+)(((mid|beg|end)|(((0\.)|([0-9]*\.))?[0-9]*%?(e(([0-9]*)|((\+|\-)[0-9]*)))?))|(bin|b|mb|gb|tb|pb|eb)))?)*)", 'g');

### Notes:
(in|ex):((type of number)[multiplier][ops]((type of number)[multiplier][ops]))*

