var request1 = new XMLHttpRequest();
request1.open('GET','https://restcountries.eu/rest/v2/all', true)
request1.send();
request1.onload = function () {var data = JSON.parse(this.response);
    console.log(data);


var request = new XMLHttpRequest();
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=USA&appid=3fc14913e20364983468602524f2b985', true)
request.send();
request.onload = function () {var data = JSON.parse(this.response);
    console.log(data);
}

var request2 = new XMLHttpRequest();
request2.open('GET','http://api.openweathermap.org/data/2.5/weather?lat=30&lon=68&appid=3fc14913e20364983468602524f2b985', true)
request2.send();
request2.onload = function () {var data = JSON.parse(this.response);
    console.log(data.weather,data.main.temp);
}

}