import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { FC } from "react";
import "styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import IRoute from "types/routesType";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map((route: IRoute) => (
            <Route path={route.path} element={route.element} key={route.key} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
