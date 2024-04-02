import MainPage from "../pages/MainPage";
import CatalogPage from "../pages/CatalogPage";
import FaqPage from "../pages/FaqPage";
import ContactsPage from "../pages/ContactsPage";
import ShopsPage from "../pages/ShopsPage";
import BasketPage from "../pages/BasketPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import { ReactNode } from "react";

export class PageRoute {
  private readonly _path: string;
  private readonly _element: ReactNode;
  private readonly _name: string;
  private readonly _inNavbar: boolean;

  constructor(
    path: string,
    element: ReactNode,
    name: string,
    inNavbar: boolean,
  ) {
    this._path = path;
    this._element = element;
    this._name = name;
    this._inNavbar = inNavbar;
  }

  get path(): string {
    return this._path;
  }

  get element(): ReactNode {
    return this._element;
  }

  get name(): string {
    return this._name;
  }

  get inNavbar(): boolean {
    return this._inNavbar;
  }
}

export const routes: PageRoute[] = [
  new PageRoute("/", <MainPage />, "Главная", true),
  new PageRoute("/catalog", <CatalogPage />, "Каталог", true),
  new PageRoute("/catalog/product/:id", <ProductPage />, "Товар", false),
  new PageRoute("/faq", <FaqPage />, "FAQ", true),
  new PageRoute("/contacts", <ContactsPage />, "Контакты", true),
  new PageRoute("/shops", <ShopsPage />, "Магазины", true),
  new PageRoute("/basket", <BasketPage />, "Корзина", false),
  new PageRoute("*", <NotFoundPage />, "404", false),
];
