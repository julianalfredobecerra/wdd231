const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=d99002e2377c11d2e2ea36284d32706d";

async function apiFetch() {
    try {
        // Store the results of the URL fetch into a variable named "response"
        const response = await fetch(url);
        // If the response is OK, then store the result of response.json()
        // conversion in a variable named "data", and
        // Output the results to the console for testing.
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        // Else, throw an Error using the response.text().
        } else {
            throw new Error(await response.text());
        }
    // Finish off the catch block by outputting any try error to the console.
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `11.8&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/02n.png`;
    let desc = "few clouds";
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();