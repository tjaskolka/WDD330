const swapi = 'https://swapi.dev/api/people/';

fetch(swapi)
.then(response => response.json())
.then(data => console.log(data));