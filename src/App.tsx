import { FC } from "react";
import "./scss/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main"></main>
      <Footer />
    </>
  );
};

export default App;
