import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC } from "react";
import { loginSvg } from "./svg/svg";
import Modal from "components/UI/Modal/Modal";
import { useState } from "react";

const HeaderLogin: FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="header__login" onClick={() => setOpenModal(true)}>
        <HeaderButton>{loginSvg}</HeaderButton>
        Войти
      </div>
      <Modal isActive={openModal} setVisible={setOpenModal}>
        <div></div>
      </Modal>
    </>
  );
};

export default HeaderLogin;
