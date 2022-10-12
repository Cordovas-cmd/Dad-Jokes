const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
 

function generateJoke() {

const config = {
    
        headers: {
            // Set the headers, key and value.
            'Accept': 'application/json',
        }
}
fetch('https://icanhazdadjoke.com', config)
.then((res) => res.json())
.then((data) => console.log(data))
    } 