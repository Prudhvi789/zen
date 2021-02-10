var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {var data = JSON.parse(this.response);
    console.log('population is',data.reduce((total,num)=>{return total+num.population;},0));
}