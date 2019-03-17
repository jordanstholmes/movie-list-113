const MovieList = (props) => {
  return props.movies.map(eachMovie => <div>{eachMovie.title}</div>);
};

export default MovieList;