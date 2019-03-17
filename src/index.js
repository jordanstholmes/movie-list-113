import movies from './data.js';
import App from './app.js';
import MovieList from './movieList.js';

const title = 'Movie List, Baby!';

ReactDOM.render(<App title={title}/>, document.getElementById('root'));

//
// ReactDOM.render(<MovieList movies={movies} />


