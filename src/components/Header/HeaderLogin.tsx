import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC, useEffect } from "react";
import { loginSvg } from "./svg/svg";
import Modal from "components/UI/Modal/Modal";
import { useState } from "react";

const HeaderLogin: FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", e => console.log(e.target));
  }, []);

  return (
    <div className="header__login" onClick={() => setOpenModal(true)}>
      <HeaderButton>{loginSvg}</HeaderButton>
      Войти
      <Modal isActive={openModal} setVisible={setOpenModal}>
        <div>test</div>
      </Modal>
    </div>
  );
};

export default HeaderLogin;
