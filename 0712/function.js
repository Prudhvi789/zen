var oddnum = function(arr){
    for(i in arr){
        if(arr[i]%2 !=0){
            console.log(arr[i]);
        }
    }
} 
oddnum([3,2,5,7]);

(function(arr){for(i in arr){
    if(arr[i]%2 !=0){
        console.log(arr[i]);
    }
} })([10,12,13,15]);

var tcap = function(str){
    console.log(str.replace(str[0],str[0].toUpperCase()));
        }
    
tcap("sadte");

(function(str){console.log(str.replace(str[0],str[0].toUpperCase()));} )("wefds");

var sumall = function(arr){
    console.log(arr.reduce(function(total,num){return total+num;},0));
} 
sumall([3,2,5,7]);

(function(arr){console.log(arr.reduce(function(total,num){return total+num;},0));} )([10,12,13,15]);

var prmnum = function(arr){
    s=[];
    c=0;
    for(i in arr){
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j ==0){
                c=1;
                break;
            }
        }
        if(c===0){s.push(arr[i]);}
        c=0;
    }
    console.log(s);
} 
prmnum([3,2,5,7,9]);

(function(arr){for(i in arr){
    s=[];
    c=0;
    for(i in arr){
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j ==0){
                c=1;
                break;
            }
        }
        if(c===0){s.push(arr[i]);}
        c=0;
    }
    }console.log(s);})([10,12,13,15]);


var pdrm = function(arr){
    for(i in arr){
        if(arr[i]===arr[i].split("").reverse().join("")){
            console.log(arr[i]);
        }
    }
} 
pdrm(["madam","hut","mam","this"]);

(function(arr){
    for(i in arr){
        if(arr[i]===arr[i].split("").reverse().join("")){
            console.log(arr[i]);
        }
    } })(["madam","hut","mam","this"]);


var arrsort = function(arr1,arr2){
        ar=[...arr1,...arr2];
        ar=ar.sort((a,b)=>{return a-b});
        //console.log(ar);
            if(ar.length%2 !=0){
                console.log(ar[Math.floor(ar.length/2)]);
            }
            else{
                console.log(ar[(ar.length/2)-1],ar[(ar.length/2)]);
            }
    } 
    arrsort([3,2,5,7],[6,0,8,3]);
    
(function(arr1,arr2){ar=[...arr1,...arr2];
    ar=ar.sort((a,b)=>{return a-b});
    //console.log(ar);
    if(ar.length%2 !=0){
        console.log(ar[Math.floor(ar.length/2)]);
    }
    else{
        console.log(ar[(ar.length/2)-1],ar[(ar.length/2)]);
    }})([10,12,13,15],[98,65,74]);


var dupe = function(arr){
    console.log([...new Set(arr)])
} 
dupe([3,2,5,2,7,7]);

(function(arr){console.log([...new Set(arr)]) })([10,12,13,15]);

var rotate = function(arr,k){
    for(i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
} 
rotate([3,2,5,7],2);

(function(arr,k){for(i=0;i<k;i++){
    arr.unshift(arr.pop());
}
console.log(arr); })([10,12,13,15],3);

