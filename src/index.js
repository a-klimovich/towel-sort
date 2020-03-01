
// // You should implement your task here.

module.exports =  function towelSort (matrix) {
  if ( matrix == undefined || matrix === [0] ) {
    return [];
  } return matrix.map((item, index) => {
      return (index % 2 != 0) ? item.reverse() : item
  }).flat()
}