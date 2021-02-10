var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    var s=[];
    for(i in obj){
        s.push(obj[i]);
    }
    console.log(s);
}

printAllValues(obj);