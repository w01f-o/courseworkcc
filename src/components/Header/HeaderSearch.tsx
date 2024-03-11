import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC, useEffect, useState } from "react";
import { searchSvg } from "./svg/svg";
import Modal from "components/UI/Modal/Modal";
import { useDebounce } from "hooks/useDebounce";

const HeaderSearch: FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    console.log(debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <div className="header__search">
      <HeaderButton onClick={() => setOpenModal(true)}>
        {searchSvg}
      </HeaderButton>
      <Modal isActive={openModal} setVisible={setOpenModal}>
        <input
          type="text"
          className="header__search-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </Modal>
    </div>
  );
};

export default HeaderSearch;
