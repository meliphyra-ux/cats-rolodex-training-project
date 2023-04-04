import { ChangeEventHandler, FC  } from "react";
import "./search-box.css";

type SearchBoxParams = {
  setSearchField: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

const SearchBox: FC<SearchBoxParams> = ({ setSearchField, ...props }) => {
  return <input type="search" {...props} onChange={setSearchField} />;
};
export default SearchBox;
