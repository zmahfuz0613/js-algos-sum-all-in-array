//SUM ALL IN ARRAY


const sumAllInArray = arr => {

  let sum = 0;
  arr.forEach(element => {
    if(!isNaN(element)){
      sum += parseInt(element);
    }
  });
  return sum;
}

console.log(sumAllInArray(["-1", "a", 4, "-32", 8, "94"]))

module.exports = {
  sumAllInArray
}
