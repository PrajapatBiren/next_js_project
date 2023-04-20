

const SearchBar = ({ keyword, onChange }: any) => {
    const BarStyle = {
        width: "98%", background: "#F0F0F0",
        border: "none", padding: "0.7rem", borderRadius: 10, marginTop: 5,
    };
    return (
        <input
            style={BarStyle}
            key="search-bar"
            value={keyword}
            placeholder={"search users"}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;