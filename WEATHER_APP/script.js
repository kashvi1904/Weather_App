const apikey = "0b3b910e170a8042e36d709d08550f74";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const icon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector("#error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            icon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector("#error").style.display = "none";
    }
}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
});