// var inputValue = null;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: '',
    }
  }

  render() {
    return (
      <div>
        <input onChange={(e) => {this.setState({textField: e.target.value})}}></input>
        <button onClick={() => {
          const text = this.state.textField;
          this.props.handleSearchInput(text)}
        }>Search</button>
      </div>
    );
  }
};

/*
When we click the button,
Get the text from input field
Rerender movies list based on the text
  On click, how to get text into app
*/

export default Search;