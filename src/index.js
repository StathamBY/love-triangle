/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles*/
 
module.exports = function getLoveTrianglesCount(preferences = []) {
  
 /**let preferences=[2,4,3,1,6,7,5];*/
    let result = 0;
    const arr = [];
    for(let i = 0; i < preferences.length; i++) 
      {
        const personA = preferences[i];
        const personB = preferences[personA - 1];
        const personC = preferences[personB - 1]; 
        if (personC === (i+1) && !arr.includes(personA) && personA != personC)
        {
          result++;
          arr.push(personA, personB, personC);
          console.log(arr);
        }
      }
    return result;
  }