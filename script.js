const apiKey = 'fe2e66467062c88014612a7629a11c33';
const form = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const city = document.getElementById(`cityInput`).value;
    if(city){
        getWeather(city);
    }
});


async function getWeather(city) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        const data = await response.json();

        if (data.cod == 200) {
            displayWeather(data);
        } else {
            weatherResult.innerHTML = `<p>Cidade não encontrada</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Erro ao buscar informações</p>`;
    }
}

function displayWeather(data) {
    const {name, main, weather} = data;
    weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <p>Temperatura: ${main.temp}°C</p>
    <p>Sensação Térmica: ${main.feels_like}°C</p>
    <p>Humidade: ${main.humidity}%</p>`;



}
