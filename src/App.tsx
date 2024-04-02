import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { FC } from "react";
import "styles/App.scss";
import "styles/_global.scss";
import { Route, Routes } from "react-router-dom";
import { PageRoute, routes } from "./routes/routes";
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
            {routes.map((route: PageRoute) => (
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
