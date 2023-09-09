import SearchBar from "../SearchBar/SearchBAr.jsx";

export default function Nav(props) {
  return (
     <div>
      <SearchBar onSearch={props.onSearch}/>
     </div>
  );
}