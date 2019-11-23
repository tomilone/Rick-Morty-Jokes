// https://rickandmortyapi.com/api/character/2
// https://icanhazdadjoke.com

function getRandomCharacter (id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(responseJson => 
        displayCharacter(responseJson))
    .catch('Something went wrong')
}

function getRandomJoke () {
    const url = 'https://icanhazdadjoke.com'

    const param = {
        headers: new Headers({
            'Accept': 'application/json'})
    };
    fetch(url,param)
    .then(response => response.json())
    .then(responseJson =>
        displayJoke(responseJson));
}

function buttonWatch (){
    $('form').submit(event => {
        event.preventDefault();
        let id = Math.floor(Math.random()*493)+1;
        getRandomCharacter(id);
        getRandomJoke();
        $('.try-me').html('Try Again!')
    })
}

function displayCharacter (responseJson){
    $('.results').html(`<h2>${responseJson.name}</h2><img src='${responseJson.image}' alt='${responseJson.name}'/>`)
}

function displayJoke (responseJson){
$('.jokes').html(`<p>${responseJson.joke}</p>`)
}

$(buttonWatch);