import * as React from "react";
import { Label, Input, Button } from "../../../components";
export interface SearchProps {
  search: string,
  setSearch: Function,
  resetSearch: Function
}

const SearchBox = (props: SearchProps) => (
  <>
    <Label label="Filter" />
    <div className="custom-input-wrap">
      <Input placeholder="Search..." value={props.search} onChangeText={props.setSearch} />
      <Button label="Reset" onClick={() => props.resetSearch()} customClass="btn-search" />
    </div>
  </>
);

export default SearchBox;
