
const Search = () => {
  return (
    <div>
      <input onChange={(e) => {console.log(e.target.value)}}></input>
      <button onClick={(e) => console.log(e.target)}>Search</button>
    </div>
  );
};

export default Search;