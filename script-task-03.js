let req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    let data = JSON.parse(this.response);
    for(const country of data ){
        let[lat, lng] = country.latlng;
        try{
            weather(country.name,lat, lng);
        }catch (e) {
            console.log(country.name);
        }
        
    }
    
}

const weather = function(country, lat=0, lng=0){
    let req2 = new XMLHttpRequest();
    req2.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5e84a0529dd73bc773b516f7add384fa`, true);
    req2.send();
    req2.onload = function() {
        let data = JSON.parse(this.response);
        console.log(`${country}: ${data.main.temp}`);
    }
}

