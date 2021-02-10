function calc(){
    let num=document.getElementById("number").value;
    console.log(num);
    let n=num.split("");
    let small=parseInt([...new Set(n)].sort((a,b)=>a-b).join(""));
    let large=parseInt([...new Set(n)].sort((a,b)=>b-a).join(""));
    //console.log(small,large);
    let c=0;
    let text="";
    if(small<1000 || large<1000 ){
        alert("Enter a four-digit number with different digits");
        window.location.reload(); 
    }
    else{
        while(num>0){
            if(large-small === 6174){
                c=1;
                break;
            }
            else{
                let temp=large-small;
                temp=""+temp;
                text+=large+"-"+small+"="+temp+" ";
                small=parseInt(temp.split("").sort((a,b)=>a-b).join(""));
                large=parseInt(temp.split("").sort((a,b)=>b-a).join(""));
                //console.log(large,small);
            }
        }
    }
    if(c==1){
        text+=large+"-"+small+"="+(large-small);
    }
    let dit=document.createElement("div");
    dit.innerHTML=text;
    document.body.append(dit);

}

let d=document.createElement("div");
d.innerHTML="<input type='text' id='number'>";
let b=document.createElement('button');
b.innerText="Submit"
b.setAttribute("onClick","calc()");
d.append(b);
document.body.append(d);