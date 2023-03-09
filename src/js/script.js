const Main = document.querySelector('.cinelist-film-main-container');

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

//cria os filmes no documento
async function showFilmData() {
    try {
        let films = await getPopularFilms();
        console.log(films)

        

        for(let i = 0; i < films.length; i++){
            if(films[i].overview == ""){
                films[i].overview = 'Sem descrição'
            }
            Main.innerHTML +=  `
            <div class="cinelist-film-post">
                <img class="cinelist-film-img" src="https://image.tmdb.org/t/p/original/${films[i].backdrop_path}" alt="img not found">
                <section class="cinelist-name-date-rating-holder">
                <div>
                    <h1 class="cinelist-film-name">${films[i].title}</h1>
                    <p class="cinelist-film-description"> ${films[i].overview}</p>
                </div>
                <div class="cinelist-date-rating-holder">
                    <div>
                    <h2>Data de lançamento: <span> ${films[i].release_date} </span></h2>
                </div>
                <div>
                    <h2>Avaliação:</h2><span class="cinelist-film-rating">${films[i].vote_average}</span>
                </div>
                </div>
            </section>
            </div>
            `
        }

        

    } catch (error) {
        console.log(error);
    }
}

//função principal fazendo as verificações finais
async function main(){
    try {
        await showFilmData();
        const listFilms = document.querySelectorAll('.cinelist-film-rating');
        

        listFilms.forEach(rating => {
            /*
            if(rating.innerHTML.length == 1){
                rating.innerHTML += '.0'
            }
            if(rating.innerHTML > 8){
                rating.style.backgroundColor = '#52FF00';
            } else if(rating.innerHTML >= 6 && rating.innerHTML < 8) {
                rating.style.backgroundColor = '#FAFF00';
            } else{
                rating.innerHTML >= 5 && rating.innerHTML < 6 ? 
                rating.style.backgroundColor = '#FF8A00' : rating.style.backgroundColor = '#FF0000';
            } 
            */
           
            //evitando o uso de muitos blocos de if e else usando ternário
            rating.innerHTML.length == 1 ? rating.innerHTML += '.0' : null;

            rating.style.backgroundColor = rating.innerHTML > 8 ? '#52FF00' :
                                           rating.innerHTML >= 6 ? '#FAFF00' :
                                           rating.innerHTML >= 5 ? '#FF8A00' :
                                           '#FF0000';
        });

    } catch (error) {
        console.log(error);
    }
} main();



