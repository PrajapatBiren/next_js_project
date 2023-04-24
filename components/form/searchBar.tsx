import { SearchBarStyleCmp } from "../stylesComponent/stylesCmp";


const SearchBar = ({ keyword, onChange }: any) => {
    return (
        <SearchBarStyleCmp
            key="search-bar"
            value={keyword}
            placeholder={"search users"}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;