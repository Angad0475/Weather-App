const checkbox= document.getElementById( "checkbox" );

const element= document.body;

checkbox.addEventListener("change",()=>{
    element.classList.toggle( "dark" );
});

const apiKey='36e5ea441de6a9d5ffaa56c6bb53b2ff'
const apiUrl='https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton= document.getElementById('searchButton');

const emojiElement= document.getElementById("icon");
const locationElement= document.getElementById('location');
const temperatureElement= document.getElementById( 'temperature' );
const descriptionElement=document.getElementById('description');
const humidElement=document.getElementById("humid");
 const windElement= document.getElementById( 'wind' );

searchButton.addEventListener('click',()=>{
    const location= locationInput.value;

    if(!location){
        alert('enter a city');
    }
    else{
        fetchWeather(location);
    }
});

function fetchWeather(location){
    const url= `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        
        locationElement.textContent= data.name;
        temperatureElement.textContent= `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent= data.weather[0].description;
        

        const iconCode= data.weather[0].icon;
        const iconUrl= `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
        //add the weather image to
        weatherIcon.src= iconUrl;
        


        


    })
    .catch(error=>{
        console.error('error fetching weather data',error);
    });
    
}

    

