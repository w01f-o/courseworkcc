import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { FC } from "react";
import "styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import IRoute from "types/routesType";
import BasketContextProvider from "context/BasketContext";
import ScrollToTop from "utils/ScrollToTop";

const App: FC = () => {
  return (
    <>
      <BasketContextProvider>
        <Header />
        <main className="main">
          <ScrollToTop />
          <Routes>
            {routes.map((route: IRoute) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </BasketContextProvider>
    </>
  );
};

export default App;
