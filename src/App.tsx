import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MainPage from "./pages/MainPage";
import { FC } from "react";
import "styles/App.scss";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <MainPage />
      </main>
      <Footer />
    </>
  );
};

export default App;
