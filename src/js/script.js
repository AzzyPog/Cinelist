

//adquire todos os dados da api e converte para json, retornando só a parte da response que importa nesse momento
async function getPopularFilms() {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c86de7f8c69f21a842fb268d9a8fb37&language=pt-BR&page=1', {
            method: 'GET'
        });
        let Films = await res.json();
        Films = Films.results;

        return Films;

    } catch (error) {
        console.log(error);
    }
};

async function showFilmData() {
    try {
        const films = await getPopularFilms();
    } catch (error) {

    }
} showFilmData();

