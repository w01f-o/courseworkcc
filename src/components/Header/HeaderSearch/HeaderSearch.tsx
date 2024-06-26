import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from "react";
import { searchSvg } from "../svg/svg";
import Modal from "components/UI/Modal/Modal";
import { productsList } from "../../../data/products";
import { IProduct } from "types/productTypes";
import SearchItem from "./SearchItem";

const HeaderSearch: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const searchedProducts = useMemo(() => {
    return productsList.filter(
      (product: IProduct) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.altName.toLowerCase().includes(inputValue.toLowerCase()),
    );
  }, [inputValue]);

  const clearModal = (): void => {
    setOpenModal(false);
    setInputValue("");
  };

  useEffect(() => {
    if (openModal) {
      inputRef.current?.focus();
      document.body.style["overflow"] = "hidden";
    } else {
      document.body.style["overflow"] = "visible";
    }
  }, [openModal]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="header__search">
      <HeaderButton onClick={() => setOpenModal(true)}>
        {searchSvg}
      </HeaderButton>
      <Modal isOpen={openModal} setOpen={clearModal}>
        <div className="header__search-modal">
          <input
            type="text"
            className="header__search-input"
            value={inputValue}
            ref={inputRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <div className="header__search-wrapper">
            {inputValue &&
              searchedProducts.map((product: IProduct) => (
                <SearchItem
                  key={product.id}
                  name={product.name}
                  id={product.id}
                  img={product.imgSmall}
                  price={product.price}
                  clearModal={clearModal}
                />
              ))}
            {!searchedProducts.length && (
              <div className="header__search-not-found">
                По вашему запросу ничего не найдено
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderSearch;
