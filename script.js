document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = ('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = Temperature: ${data.main.temp} °C;
            document.getElementById('description').textContent = Description: ${data.weather[0].description};
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('City not found. Please try again.');
        });
});