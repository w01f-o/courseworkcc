import HeaderButton from "components/UI/HeaderButton/HeaderButton";
import { FC, useState } from "react";
import { loginSvg } from "./svg/svg";
import Modal from "components/UI/Modal/Modal";

const HeaderLogin: FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="header__login" onClick={() => setOpenModal(true)}>
        <HeaderButton>{loginSvg}</HeaderButton>
        Войти
      </div>
      <Modal isOpen={openModal} setOpen={setOpenModal}>
        <div>Login</div>
      </Modal>
    </>
  );
};

export default HeaderLogin;
