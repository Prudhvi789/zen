async function getdata(){
    try{
        let resp= await fetch('https://random-word-api.herokuapp.com/word');
        let respdata= await resp.json();
        let temp= respdata[0];
        let gifresp= await fetch('https://api.giphy.com/v1/gifs/search?api_key=gU8T4P7Mbk6VZ5enYZpP2oacOvb1QDem&q='+temp+'&limit=1&offset=0&rating=g&lang=en');
        let gifdata= await gifresp.json();
    
        let s= gifdata['data'][0].embed_url;
        let d=document.createElement("div");
        let ne=document.createElement("iframe");
        ne.setAttribute("src",s);
        d.append(ne);
        //console.log(d.innerHTML);
        document.body.append(d);
}
    catch(error){
        console.log(error);
    }
}

getdata();