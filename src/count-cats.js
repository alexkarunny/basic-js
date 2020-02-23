module.exports = function countCats(arr) {
  let num = 0;
  let str;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      str = /^\^\^$/.test(arr[i][j]);
      if (str) {
        num += 1;
      }
      
    }
  
    
  }
  return num;
};
