const Search = () => {
  return (
    <input
      onChange={(event) => console.log(event.target.value)}
      onFocus={() => console.log("Search bar selected!")}
      placeholder="Search..."
    />
  );
};

export default Search;
