const swapi = 'https://swapi.dev/api/people/';

function getJSON(swapi) {
    return fetch(swapi)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
            
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

