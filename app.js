function getWeather(){
    const apiKey="36e5ea441de6a9d5ffaa56c6bb53b2ff";
    const city= document.getElementById("city").value;

    if(!city){
        alert("please enter a city");
        return;
    }
    const currentWeatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
    .then(response=>response.json())
    .then(data=>{
        displayWeather(data);
    })
    .catch(error=>{
        console.error('error fetching current weather data:',error);
            alert('error fetching current weather data please try again.');
    });


}
function displayWeather(data){
    const tempDivInfo= document.getElementById("temp-div");
    const weatherInfoDiv= document.getElementById("weather-info");
    const weatherIcon= document.getElementById("weather-icon");
    const hourlyForecastDiv= document.getElementById("hourly-forecast");

    weatherInfoDiv.innerHTML="";
    hourlyForecastDiv.innerHTML="";
    tempDivInfo.innerHTML="";

    if(data.cod==='404'){
        weatherInfoDiv.innerHTML=`<p>${data.message}</p>`;
    }else{
        const cityName= data.name;
        const temperature=Math.round(data.main.temp-273.15);
        const description= data.weather[0].description;
        const iconCode= data.weather[0].icon;
        const iconUrl=`http://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML=`
        <P>${temperature}°C</p>
        `;
        const weatherHTML=`
        <p>${cityName}</p>
        <p>${description}</p>
        `;
        tempDivInfo.innerHTML= temperatureHTML;
        weatherInfoDiv.innerHTML= weatherHTML;
        weatherIcon.src= iconUrl;
        weatherIcon.alt= description;

        showImage();
    }
}


function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
}    