async function getdata(){
let resp= await fetch('https://pixabay.com/api/?key=19898984-3816d81141bd611ad1283cb81&q=nature&image_type=photo');
let data= await resp.json();
console.log(data);
var txt="";
let d=document.createElement("div");
d.setAttribute("class","container");
d.setAttribute("id","main");
var disp=document.createElement("div");
disp.setAttribute("class","container");
var side=document.createElement("nav");
side.setAttribute("class","navbar");
side.innerHTML=`<div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
                </div>`;
data.hits.forEach(element => {
    txt+=`<div class='col'>
            <img  style='height:`+element.webformatHeight+`px; width:`+element.webformatWidth+`px' src=`+element.webformatURL+`>
        </div>`;
});
disp.innerHTML=`<div class="jumbotron text-center header" style="margin-bottom:0; font-family:Lobster; background-color:rgb(245, 158, 66)"></div>`+txt;
d.append(side,disp);
//d.append(r);
document.body.append(d);
}

getdata();

