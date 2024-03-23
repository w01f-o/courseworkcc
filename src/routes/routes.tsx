import IRoute from "types/routesType";
import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import FaqPage from "../pages/FaqPage";
import ContactsPage from "../pages/ContactsPage";
import ShopsPage from "../pages/ShopsPage";
import BasketPage from "../pages/BasketPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";

export const routes: IRoute[] = [
  { path: "/", element: <MainPage />, name: "Главная", inNavBar: true },
  {
    path: "/catalog",
    element: <CatalogPage />,
    name: "Каталог",
    inNavBar: true,
  },
  {
    path: "/catalog/product/:id",
    element: <ProductPage />,
    name: "Товар",
    inNavBar: false,
  },
  { path: "/faq", element: <FaqPage />, name: "FAQ", inNavBar: true },
  {
    path: "/contacts",
    element: <ContactsPage />,
    name: "Контакты",
    inNavBar: true,
  },
  {
    path: "/shops",
    element: <ShopsPage />,
    name: "Магазины",
    inNavBar: true,
  },
  {
    path: "/basket",
    element: <BasketPage />,
    name: "Корзина",
    inNavBar: false,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    name: "404",
    inNavBar: false,
  },
];
