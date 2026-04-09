const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherCard = document.getElementById('weather-card');
const cityDisplay = document.getElementById('city');
const temperatureDisplay = document.getElementById('temperature');
const descriptionDisplay = document.getElementById('description');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind');
const iconContainer = document.getElementById('icon-container');
const bgContainer = document.getElementById('dynamic-bg');

// Initialize with default sunny/cloudy baseline
document.body.className = 'bg-sunny';

// Weather Mapping to SVG icons (simple logic)
const getWeatherIcon = (weatherCode) => {
    if (weatherCode === 0 || weatherCode === 1) {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`; // Sun
    } else if (weatherCode === 2 || weatherCode === 3) {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1834 20.2573 10.2736 18 10.0275C17.5585 6.63725 14.6295 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01141 11.4645 4.03374 11.6915C2.29807 12.3025 1 13.9877 1 16C1 18.2091 2.79086 20 5 20H17.5Z"></path></svg>`; // Cloud
    } else if (weatherCode >= 51 && weatherCode <= 67) {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><line x1="16" y1="16" x2="16" y2="22"></line><line x1="8" y1="16" x2="8" y2="22"></line><line x1="12" y1="18" x2="12" y2="22"></line></svg>`; // Rain
    } else if (weatherCode >= 71 && weatherCode <= 77) {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`; // Snow
    } else if (weatherCode >= 95) {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><polygon points="13 11 9 17 15 17 11 23"></polygon></svg>`; // Lightning
    } else {
        return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1834 20.2573 10.2736 18 10.0275C17.5585 6.63725 14.6295 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.01141 11.4645 4.03374 11.6915C2.29807 12.3025 1 13.9877 1 16C1 18.2091 2.79086 20 5 20H17.5Z"></path></svg>`; // Default
    }
};

const getWeatherDescription = (code) => {
    const codes = {
        0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
        45: "Fog", 48: "Depositing Rime Fog", 51: "Light Drizzle", 53: "Moderate Drizzle",
        55: "Dense Drizzle", 61: "Slight Rain", 63: "Moderate Rain", 65: "Heavy Rain",
        71: "Slight Snow", 73: "Moderate Snow", 75: "Heavy Snow", 95: "Thunderstorm"
    };
    return codes[code] || "Unknown Weather";
};

// --- Dynamic Background Logic --- //
function setWeatherBackground(code) {
    if (!bgContainer) return;
    
    // Clear out existing dynamic elements
    bgContainer.innerHTML = '';
    
    if (code === 0 || code === 1) {
        document.body.className = 'bg-sunny';
        const sun = document.createElement('div');
        sun.className = 'sun-element';
        bgContainer.appendChild(sun);
        createClouds(2);
    } 
    else if (code === 2 || code === 3 || code === 45 || code === 48) {
        document.body.className = 'bg-cloudy';
        createClouds(5);
    }
    else if (code >= 51 && code <= 67) {
        document.body.className = 'bg-rainy';
        createRain(80);
        createClouds(3, true);
    }
    else if (code >= 71 && code <= 77) {
        document.body.className = 'bg-snowy';
        createSnow(80);
    }
    else if (code >= 95) {
        document.body.className = 'bg-thunder';
        createRain(100);
        createClouds(4, true);
    }
    else {
        document.body.className = 'bg-cloudy';
        createClouds(3);
    }
}

function createClouds(count, isDark = false) {
    for (let i = 0; i < count; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'cloud-wrapper';
        wrapper.style.top = `${Math.random() * 40}%`;
        wrapper.style.animationDuration = `${30 + Math.random() * 50}s`;
        wrapper.style.animationDelay = `-${Math.random() * 40}s`;
        
        const cloud = document.createElement('div');
        cloud.className = 'cloud-element';
        if (isDark) {
            cloud.style.background = '#64748b';
            cloud.style.opacity = '0.6';
        }
        cloud.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
        
        wrapper.appendChild(cloud);
        bgContainer.appendChild(wrapper);
    }
}

function createRain(count) {
    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-element';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${0.3 + Math.random() * 0.4}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        bgContainer.appendChild(drop);
    }
}

function createSnow(count) {
    for (let i = 0; i < count; i++) {
        const flake = document.createElement('div');
        flake.className = 'snow-element';
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.width = `${3 + Math.random() * 5}px`;
        flake.style.height = flake.style.width;
        flake.style.animationDuration = `${3 + Math.random() * 5}s`;
        flake.style.animationDelay = `${Math.random() * 3}s`;
        flake.style.opacity = (0.5 + Math.random() * 0.5).toString();
        bgContainer.appendChild(flake);
    }
}

// Ensure there is some default weather design shown if user just opens the page
setWeatherBackground(0); // Start sunny by default

async function fetchWeather(city) {
    if (!city) return;

    // Show loading state
    weatherCard.classList.remove('disabled');
    weatherCard.classList.add('fade-out');
    
    try {
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
        const geoData = await geoResponse.json();
        
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found");
        }
        
        const { latitude, longitude, name, country } = geoData.results[0];
        
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`);
        const weatherData = await weatherResponse.json();
        
        const current = weatherData.current;
        
        setTimeout(() => {
            cityDisplay.textContent = `${name}, ${country || ''}`;
            temperatureDisplay.textContent = Math.round(current.temperature_2m);
            descriptionDisplay.textContent = getWeatherDescription(current.weather_code);
            humidityDisplay.textContent = `${current.relative_humidity_2m}%`;
            windDisplay.textContent = `${current.wind_speed_10m} km/h`;
            iconContainer.innerHTML = getWeatherIcon(current.weather_code);
            
            // Set Dynamic Background depending on weather
            setWeatherBackground(current.weather_code);
            
            weatherCard.classList.remove('fade-out');
        }, 300);

    } catch (error) {
        setTimeout(() => {
            cityDisplay.textContent = "Error";
            temperatureDisplay.textContent = "--";
            descriptionDisplay.textContent = "City not found";
            humidityDisplay.textContent = "--%";
            windDisplay.textContent = "-- km/h";
            iconContainer.innerHTML = getWeatherIcon(-1); // default
            
            weatherCard.classList.remove('fade-out');
        }, 300);
        console.error(error);
    }
}

searchBtn.addEventListener('click', () => {
    fetchWeather(cityInput.value.trim());
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(cityInput.value.trim());
    }
});
