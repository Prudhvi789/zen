async function getcountry(){
    try{
        let cntresp= await fetch('https://restcountries.eu/rest/v2/all');
        let cntdata= await cntresp.json();
        var i=104;
        var text="";
        let d=document.createElement("div");
        d.setAttribute("class","container");
        r=document.createElement("div");
        r.setAttribute("class","row");
        while(i<106){
        let temp= cntdata[i];
        console.log(temp);
        let ide=temp.capital.substring(0,3);
        text+=`<div class='col-sm-4'>
                    <div class='card align-items-center bg-dark text-white'>
                        <div class='card-header'>`+temp.name+`</div>
                        <div class='card-body'>
                            <iframe width=230px src=`+temp.flag+`></iframe>
                            <p>`+temp.capital+`</p>
                            <p>`+temp.alpha3Code+`</p>
                            <p>`+temp.region+`</p>
                            <button type='submit' class='btn btn-primary' onClick=getweather('`+ide+`')>Click for weather</button>
                        </div>
                    </div>
                </div>`;
        i++;
        }
        r.innerHTML=text;
        d.append(r);
        document.body.append(d);
    }
    catch(error){
        console.log(error);
    }
}
 
async function getweather(ide){
    try{
        let code=ide;
        let wethresp= await fetch('http://api.openweathermap.org/data/2.5/weather?q='+code+'&appid=3fc14913e20364983468602524f2b985');
        let wethdata= await wethresp.json();
        let inn=null;
        inn=document.createElement('div');
        inn.setAttribute("class","row");
        inn.innerText="weather details:"+wethdata.main.temp+" - tempratue, "+wethdata.wind.speed+" - wind speed";
        document.body.append(inn);
    }
    catch(error){
        console.log(error);
    }
}

getcountry();