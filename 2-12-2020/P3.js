var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
  var s=[];  
 for(i in obj){
     s.push([i,obj[i]]);
 }
 console.log(s);
}

convertListToObject(obj);