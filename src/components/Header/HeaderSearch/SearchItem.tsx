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
  img,
  price,
  clearModal,
}): JSX.Element => {
  return (
    <Link
      to={`/propucts/${id}`}
      className="header__search-item"
      onClick={clearModal}
    >
      <img src={img} alt="" className="header__search-item-img" />
      <div className="header__search-item-name">{name}</div>
      <div className="header__search-item-price">{price} ₽</div>
    </Link>
  );
};

export default SearchItem;
