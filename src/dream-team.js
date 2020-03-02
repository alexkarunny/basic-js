module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)) return false;

  let nameDreamTeam = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) != 'string') continue;

    for (let j = 0; j< arr[i].length; j++) {
      if (arr[i][j] == ' ') continue;
      
      nameDreamTeam.push(arr[i][j]);

      break;
    }
    
  }

  return nameDreamTeam.join("").toUpperCase().split("").sort().join("");

}