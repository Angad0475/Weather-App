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
    const {name:city,
                main:{temp,humidity},
                weather:[{description,id,icon}]
    }=data;
            const cityDisplay= document.createElement("p");

            const tempDisplay=document.createElement("p");

            const humidityDisplay=document.createElement("p");

            const descDisplay=document.createElement("p");

            const weatherEmoji=document.createElement("p");

            temp-div.appendChild(tempDisplay);
            weatherEmoji.appendChild(weatherEmoji);
            city-div.appendChild(cityDisplay);
            weather-info.appendChild(descDisplay);
            humid-div.appendChild(humidityDisplay);
}
const checkbox= document.getElementById( "checkbox" );

const element= document.body;

checkbox.addEventListener("change",()=>{
    element.classList.toggle( "dark" );
});
        
        
        
        /*const iconUrl=`http://openweathermap.org/img/wn/${iconCode}@4x.png`;*/
