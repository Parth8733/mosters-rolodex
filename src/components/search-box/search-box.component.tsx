import { ChangeEventHandler } from "react";
import "../search-box/search-box.styles.css";
// One of the way, typescript interface are automatically use overloading functionality
// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a:string) => void;
// }

// another way, typescript interface extends functionality
// interface ISearchBoxProps extends IOnChangeHandler {
//   className: string;
//   placeholder: string;
// }

// interface IOnChangeHandler {
//   onChangeHandler: (a:string) => void;
// }

// "types" can replace with interface, but it wont give you extends and overloading functionality
//advanctage: you can do union on types

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
