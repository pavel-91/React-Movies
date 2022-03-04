import Movie from "../movie/movie";


const Movies = (props) => {
    const { movies = [] } = props;

    return (
        <>
            <div className="movies">
                {movies.length ? movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie} />
                )) : <p>Nothing was found for your query.</p>}
            </div>
        </>
    )
}

export default Movies;