

async function getPopularFilms() {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c86de7f8c69f21a842fb268d9a8fb37&language=pt-BR&page=1', {
            method: 'GET'
        });
        var Films = await res.json();
        Films = Films.results;
        console.log(Films)

    } catch (error) {
        console.log(error);
    }

}
getPopularFilms();