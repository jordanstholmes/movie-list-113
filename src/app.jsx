import MovieList from './movieList.js';
import movies from './data.js';
import Search from './search.js';

const App = (props) => {
  return (
    <div>
      <h1>Movie List, Baby!</h1>
      <Search />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;