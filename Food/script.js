async function getdata(){
    let word=document.getElementById('search').value;
    if(word === ''){
        alert("Please enter something to search for"); 
    }
    else if(/\d/.test(word)){
        alert("Enter a word idiot !!")
    }
    else{
        let diet=document.getElementById('diet').value;
        let cuisine=document.getElementById('cuisine').value;
        let meal=document.getElementById('meal').value;
        //console.log(word);
        let str='';
        if(diet != 'Select an option'){
            str+='&diet='+diet;
            document.body.a
        }
        if(cuisine != 'Select an option'){
            str+='&cuisine='+cuisine;
        }
        if(meal != 'Select an option'){
            str+='&meal='+meal;
        }
        console.log(str);
        
        let resp= await fetch('https://api.edamam.com/search?q='+word+'&app_id=b90e5271&app_key=801469169e8e069dfdb4ddf53b900b86'+str);
        let data= await resp.json();
        console.log(data);
        var text="";
        let d=document.createElement("div");
        d.setAttribute("class","container");
        d.setAttribute("id","main");
        r=document.createElement("div");
        r.setAttribute("class","row");
        data.hits.forEach(element => {
            text+=`<div class='col-sm-4 column'>
                        <div class='card align-items-center card1'>
                            <div class='card-header heading'>`+element.recipe.label.substr(0,22)+`</div>
                            <div class='card-body' style='text-align:left'>
                                <iframe height=304px src=`+element.recipe.image+`></iframe>
                                <p>Calories : `+Math.round(element.recipe.calories)+` Kcal</p>
                                <p>Cautions : `+element.recipe.cautions +`</p>
                                <p>Diet Labels : `+element.recipe.dietLabels+`</p>
                                <p>Ingredients : `+element.recipe.ingredients[0].text.substr(0,15)+`<a href='`+element.recipe.url+`'> [....]</a></p>
                                <a style='margin-left: 120px' href='`+element.recipe.url+`'>Recipe</a>
                            </div>
                        </div>
                    </div>`;
        });
        r.innerHTML=text;
        d.append(r);
        document.body.append(d);
    }
}

function filterdata(){
    if(document.getElementById("main")){
        document.getElementById("main").remove();
    }
    getdata();
}
//getdata();

function loadscreen(){
    var s=document.createElement('div');
    s.innerHTML=`
    <div class="jumbotron text-center heade" style="margin-bottom:0; font-family:Lobster; background-color:rgb(245, 158, 66)">
        <div>   
        <h1 class="display-2 text-white ">Food Fraspello</h1>
        <h4 class="text-white font-weight-light">Box of Recipes</h6>
        </div>    
    </div>
    <div class="row d-flex justify-content-center">
        <input type=text class="form-control-lg" placeholder="  Search for food" id="search">
        <button class="btn btn-primary" type=submit onClick="getdata()">Search</button>
    </div>
    <div class="row d-flex justify-content-end">
        <button style="position:fixed;margin-right:8px" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
            </svg>
            Filters
        </button>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Filters</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row justify-content-center">
                <div class="col-2">
                    Diet
                </div>
                <div class="col-2">     
                    <div class="btn-group">
                        <select id="diet">
                            <option selected="selected">Select an option</option>
                            <option value="balanced">balanced</option>
                            <option value="high-protein"> high-protein</option>
                            <option value="high-fiber" >high-fiber</option>
                            <option value="low-fat" >low-fat</option>
                            <option value="low-carb" >low-carb</option>
                            <option value="low-sodium" >low-sodium</option>
                        </select>    
                    </div>
                </div>   
           </div>
           <div class="row justify-content-center">
                <div class="col-2">
                    Cuisine
                </div>
                <div class="col-2">     
                    <div class="btn-group">
                        <select id="cuisine">
                            <option selected="selected">Select an option</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                        </select>    
                    </div>
                </div>   
           </div>
           <div class="row justify-content-center">
                <div class="col-2">
                    Meal
                </div>
                <div class="col-2">     
                    <div class="btn-group">
                        <select id="meal">
                            <option selected="selected">Select an option</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Snack">Snack</option>
                            <option value="Dinner">Dinner</option>
                        </select>    
                    </div>
                </div>   
           </div>
           <div class="row justify-content-center">
                <div class="col-2">
                    Dish
                </div>
                <div class="col-2">     
                    <div class="btn-group">
                        <select id="dish">
                            <option selected="selected">Select an option</option>
                            <option value="Soup">Soup</option>
                            <option value="Salad">Salad</option>
                            <option value="Sandwich">Sandwich</option>
                        </select>    
                    </div>
                </div>   
           </div> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onclick=filterdata()>Save changes</button>
        </div>
        </div>
    </div>
    </div>`
    document.body.append(s);

}

loadscreen();