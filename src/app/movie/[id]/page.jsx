

const MoviePage = async({ params }) => {
    const movieid = params.id;
    console.log(movieid)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}`);
    const movie =await res.json();
    console.log(movie.backdrop_path);
    return (
        <div className="max-w-6xl mx-auto mt-10 relative">
            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path} `}alt="backdrop_path" />
            <h1 className="text-white font-bold text-8xl lg:absolute lg:top-96 p-4 px-10 flex-shrink-0">{movie.title}</h1>
            <p className="text-red-300 font-bold text-2xl lg:absolute lg:top-[90%] p-4 px-16">{movie.tagline}</p>
        </div>
    );
}

export default MoviePage;
