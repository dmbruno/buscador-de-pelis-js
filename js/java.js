
const apiKey = 'c11b605b4834c12558b18c6b205eea24';
const pelicula = document.querySelector('#pelis');
const input = document.querySelector('#input-de-busqueda'); // Asume que tienes un campo de entrada con este id
const boton = document.querySelector('#boton-de-busqueda'); // Asume que tienes un botón con este id

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTFiNjA1YjQ4MzRjMTI1NThiMThjNmIyMDVlZWEyNCIsInN1YiI6IjY1NDNiMGZlZTFhZDc5MDEyYzkxNDQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5qC9ofPBWMOYPWkvJIBfN1-MbWWVOR7jW2Jfwu1WBU'
    }
};

// Cuando el usuario hace clic en el botón de búsqueda, realiza la solicitud a la API
boton.addEventListener('click', () => {
    const terminoDeBusqueda = input.value;
    fetch(`https://api.themoviedb.org/3/search/movie?query=${terminoDeBusqueda}&api_key=${apiKey}`, options)
        .then(res => {
            if (!res.ok) {
                throw new error('error')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            data.results.forEach(movie => {
                const article = document.createElement('article');
                article.className = 'card'
                article.innerHTML += `
                    <h1 class="titulo"> ${movie.original_title}</h1>
                    <img id="img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="imagen de peli">
                    <p class="texto">Reseña:<br> ${movie.overview}</p>
                    <p class="rese1">Rating: ${movie.vote_average}</p>
                    <p class="rese2">Cantidad de valoraciones: ${movie.vote_count}</p>
                `;
                pelicula.append(article);
            });
        })
        .catch(err => console.error(err));
});

    