import IRoute from "types/routesType";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import FaqPage from "../pages/FaqPage";
import ContactsPage from "../pages/ContactsPage";
import ShopsPage from "../pages/ShopsPage";
import BasketPage from "../pages/BasketPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes: IRoute[] = [
  { path: "/", element: <MainPage />, name: "Главная", key: 1, inNavBar: true },
  {
    path: "/catalog",
    element: <CatalogPage />,
    name: "Каталог",
    key: 2,
    inNavBar: true,
  },
  { path: "/faq", element: <FaqPage />, name: "FAQ", key: 3, inNavBar: true },
  {
    path: "/contacts",
    element: <ContactsPage />,
    name: "Контакты",
    key: 4,
    inNavBar: true,
  },
  {
    path: "/shops",
    element: <ShopsPage />,
    name: "Магазины",
    key: 5,
    inNavBar: true,
  },
  {
    path: "/basket",
    element: <BasketPage />,
    name: "Корзина",
    key: 6,
    inNavBar: false,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    name: "404",
    key: 7,
    inNavBar: false,
  },
];
