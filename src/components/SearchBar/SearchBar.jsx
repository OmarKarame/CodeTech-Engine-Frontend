import "./SearchBar.scss";

const SearchBar = ({ placeHolderText, handleSearchInput }) => {
  return (
    <div className="search-bar">
      {/*Props being used to change the placeholder text, as well as store search word and handle the logic of the search bar for updates*/}
      <input
        type="text"
        placeholder={placeHolderText}
        onChange={handleSearchInput}
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
