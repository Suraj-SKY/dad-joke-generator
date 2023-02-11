// we are using api called as "api ninjas" to get the jokes
// login to the website and to get the api key
// click on show api key to get your api key
const btnElement = document.getElementById('btn');
const jokeElement = document.getElementById('joke');

const apiKey = "41FfB7uFOaXpSw2S8GzsrA==B1V8qCwAg08fRT28";

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke() {
    try {
        jokeElement.innerHTML = `<img src="loader.gif" alt="Loading...">`;
        btnElement.disabled = true;
        btnElement.innerHTML = "Loading...";

        const response = await fetch(apiURL, options);
        // converting response to json
        const data = await response.json();

        // console.log(data);
        // console.log(data[0].joke);

        jokeElement.innerHTML = data[0].joke;
        btnElement.disabled = false;
        btnElement.innerHTML = "Get Joke";
    } catch (error) {
        console.log(error);
        jokeElement.innerHTML = `Something went wrong... Try again later!!! <br> ${error}`;
        btnElement.disabled = false;
        btnElement.innerHTML = "Get Joke";
    }
}

btnElement.addEventListener('click', getJoke); 