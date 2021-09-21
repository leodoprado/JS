let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Maneira mais moderna
[varA, varB, varC] = [varB, varC, varA];

/*
Maneira antiga:

const tempVarA = varA;
varA = varB;
varB = varC;
varC = tempVarA;
*/

console.log(varA, varB, varC);