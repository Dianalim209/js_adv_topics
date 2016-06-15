var _ = {
   map: function(list, callback) {
     var newMap = [];
     for(var x in list){
       newMap.push(callback(list[x]));
     } return newMap;
   },
  // sum all the items from a given array
   reduce: function(list,callback,memo) {
     if(memo == undefined){
       memo = list[0];
       for(var i = 1; i < list.length; i++){
         memo = callback(memo, list[i]);
       }
     }else{
       for(var x in list){
         memo = callback(memo,list[x]);
       }
     } return memo;
   },
   find: function(list, predicate) {
     for(i in list) {
       if(predicate(list[i])){
         return list[i];
       }
     }  return;
  },
   filter: function(list, predicate) {
   var newArr = [];
   for(var i = 0; i < list.length; i++){
     if(predicate(list[i])){
       newArr.push(list[i]);
     }
   } return newArr;
  },
   reject: function(list, predicate) {
     var newArr = [];
     for(var i = 0; i < list.length; i++){
       if(!predicate(list[i])){
         newArr.push(list[i])
       }
     } return newArr;
    }
  };

testArray = [1,2,3,4,5,6]

var mapTest = _.map(testArray, function(num){ return num * 3; });
console.log('map',mapTest);
var sum = _.reduce(testArray, function(memo, num){ return memo + num; })
console.log('reduce', sum);
var someValue = _.find(testArray,function(num) {return num == 3; });
console.log('find',someValue);
var odds = _.reject(testArray, function(num){ return num % 2 == 0; });
console.log('reject:',odds);
var evens = _.filter(testArray,function(num){ return num % 2 == 0; });
console.log('filter:',evens);
