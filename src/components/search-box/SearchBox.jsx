import { Component } from "react";
import './search-box.css'

class SearchBox extends Component {
  render() {
    const { setSearchField, ...props } = this.props
    return (
      <input
        type="search"
        {...props}
        onChange={setSearchField}
      />
    );
  }
}
export default SearchBox
