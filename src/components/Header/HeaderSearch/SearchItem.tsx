import { FC } from "react";
import { Link } from "react-router-dom";

interface SearchItemProps {
  id: number;
  img: string;
  name: string;
  price: number;
  clearModal: () => void;
}

const SearchItem: FC<SearchItemProps> = ({
  name,
  id,
  clearModal,
}): JSX.Element => {
  return (
    <Link
      to={`/propucts/${id}`}
      className="header__search-item"
      onClick={clearModal}
    >
      {name}
    </Link>
  );
};

export default SearchItem;
