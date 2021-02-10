async function getdata(){
    let resp= await fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&');
    let data= await resp.json();
    console.log(data);
    let name=document.getElementById('name').value;
    let brand=document.getElementById('brand').value;
    let gender=document.getElementById('gender').value;
    let color=document.getElementById('color').value;
    let year=document.getElementById('year').value;
    //console.log(word);
    let str='';
    if(name != 'Select an option'){
        str+='&name='+name;
        document.body.a
    }
    if(brand != 'Select an option'){
        str+='&brand='+brand;
    }
    if(gender != 'Select an option'){
        str+='&gender='+gender;
    }
    if(color != 'Select an option'){
        str+='&colorway='+color;
    }
    if(year != 'Select an option'){
        str+='&releaseYear='+year;
    }
    console.log(str);
    let 
    var txt="";
    let d=document.createElement("div");
    d.setAttribute("class","container");
    d.setAttribute("id","main");
    var disp=document.createElement("div");
    disp.setAttribute("class","container");
    data.results.forEach(element => {
        txt+=`<div class='col'>
                <img  src=`+element.media.smallImageUrl+`>
            </div>`;
    });
    disp.innerHTML=txt;
    d.append(disp);
    //d.append(r);
    document.body.append(d);
    }
    
function loadscreen(){
    var s=document.createElement('div');
    s.innerHTML=`<nav class="navbar navbar-expand-lg fixed-top py-3">
                    <div class="container">
                        <a href="#" class="navbar-brand text-uppercase font-weight-bold">Home</a>
                        <button type="button"class="navbar-toggler navbar-toggler-right">
                            <i class="fa fa-bars"></i>
                        </button>
                        <div id="navbarSupportedContent" class="collapse navbar-collapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">Profile</a></li>
                                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About</a></li>
                                <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <button class='btn btn-primary' onclick='getdata()'>Search</button>
                </div>`
    document.body.append(s);

    }

    loadscreen();