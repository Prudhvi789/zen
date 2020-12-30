function checkAll() {  
    var inputs = document.querySelectorAll('.fd');   
    var c=0;
    var st="";
    for (var i = 0; i < inputs.length; i++) {   
        if(inputs[i].checked){
            st+=inputs[i].value+",";
            //console.log(inputs[i].value,st);
            c++;
        }   
    }
    st=st.slice(0,-1);
    //console.log(st);
    if(c < 3){ alert("Select any 3 food choices") }
    else{ display(st);} 
}  

function display(st){
    var fname=document.getElementsByName("firstname")[0].value;
    var lastname=document.getElementsByName("lastname")[0].value;
    var address=document.getElementsByName("address")[0].value;
    var pincode=document.getElementsByName("Pincode")[0].value;
    var gender=document.getElementsByName("gender")[0].value;
    var state=document.getElementsByName("state")[0].value;
    var country=document.getElementsByName("country")[0].value;
    var food=st;
    
    
    var maintable=document.createElement('table');
    //maintable.setAttribute("class","table table-bordered");
    var row1=createrow();
    row1.append(createcolumn("","First Name"),createcolumn("",fname));
    var row2=createrow();
    row2.append(createcolumn("","Last Name"),createcolumn("",lastname));
    var row3=createrow();
    row3.append(createcolumn("","Address"),createcolumn("",address));
    var row4=createrow();
    row4.append(createcolumn("","Pincode"),createcolumn("",pincode));
    var row5=createrow();
    row5.append(createcolumn("","Gender"),createcolumn("",gender));
    var row6=createrow();
    row6.append(createcolumn("","Food choice"),createcolumn("",food));
    var row7=createrow();
    row7.append(createcolumn("","State"),createcolumn("",state));
    var row8=createrow();
    row8.append(createcolumn("","Country"),createcolumn("",country));
    maintable.append(row1,row2,row3,row4,row5,row6,row7,row8);
    maintable.setAttribute("style","border: 1px solid black;border-collapse: collapse;padding: 10px;text-align:center;margin-left:400px;background-color:#f6f2f2;width:600px");
    document.body.append(maintable);
    document.getElementById('details').reset();
}



function createcolumn(classname="",text=""){
    var col=document.createElement('td');
    col.setAttribute("style","border: 1px solid black;border-collapse: collapse;padding: 10px;text-align:center");
    col.innerHTML=text;
    return col;
}

function createrow(classname="",text=""){
    var row=document.createElement('tr');
    row.setAttribute("style","border: 1px solid black;border-collapse: collapse;padding: 10px;text-align:center");
    row.innerHTML=text;
    return row;
}