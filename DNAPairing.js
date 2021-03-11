// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  let newArr = []
  let newStr = [...str]
  if(str !== ''){
    newStr.map(char => char === 'A' ? newArr.push(["A", "T"]) : char === 'T' ? newArr.push(["T", "A"]) 
            : char === 'C' ? newArr.push(["C", "G"])
            : char === 'G' ? newArr.push(["G", "C"]) 
            : null)
  }
  return newArr;
}

pairElement("GCG");
