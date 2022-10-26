//  1. 
// It should return {1,2,3,4}

//  2. 
// It should return {"ref"}; 

//  3. 
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// {[1,2,3] => true} 
// {[1,2,3] => false}

//  4. 
// const hasDuplicate = arr => {
//     return new Set(arr).size !== arr.length; 
// }

//  5. 
const isVowel = char => "aeiou".includes(char); 

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
  