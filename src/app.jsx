import MovieList from './movieList.js';
import movies from './data.js';
import Search from './search.js';

console.log(movies);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      text: '',
    }
  }

  filterMoviesBasedOnInput() {
    const text = this.state.text;
    const filtered = movies.filter((movie) => movie.title.indexOf(text) !== -1);
    this.setState({movies: filtered});
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Search handleSearchInput={
          (text) => {
            this.setState({text}, () => {
              this.filterMoviesBasedOnInput()
            });
          }
        }/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
