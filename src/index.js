
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var arr = [];
    if (!matrix || matrix.length == 0) {
        arr = [];
      } else {
          for (let i = 0; i < matrix.length; i++) {
              const element = matrix[i];
              if (i%2 != 0) {
                  arrElement = element.reverse();
              } else { arrElement = element;}
              arr = arr.concat(arrElement);
          }
          
      }
      return arr;
      
}
