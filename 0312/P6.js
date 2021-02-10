var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var transformEmployeeList = [];
 var nobj={};
 for(i in arr){
     for(j in arr[i]){
    nobj[arr[i][j][0]]=arr[i][j][1];
     }
     transformEmployeeList.push(nobj);
     nobj={}
}
 return transformEmployeeList;
}

console.log(transformEmployeeData(arr));