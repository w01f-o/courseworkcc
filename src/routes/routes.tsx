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
  private readonly _inMobileNav: boolean;

  constructor(
    path: string,
    element: ReactNode,
    name: string,
    inNavbar: boolean,
    inMobileNav: boolean,
  ) {
    this._path = path;
    this._element = element;
    this._name = name;
    this._inNavbar = inNavbar;
    this._inMobileNav = inMobileNav;
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

  get inMobileNav(): boolean {
    return this._inMobileNav;
  }
}

export const routes: PageRoute[] = [
  new PageRoute("/", <MainPage />, "Главная", true, true),
  new PageRoute("/catalog", <CatalogPage />, "Каталог", true, true),
  new PageRoute("/catalog/product/:id", <ProductPage />, "Товар", false, false),
  new PageRoute("/faq", <FaqPage />, "FAQ", true, true),
  new PageRoute("/contacts", <ContactsPage />, "Контакты", true, true),
  new PageRoute("/shops", <ShopsPage />, "Магазины", true, true),
  new PageRoute("/basket", <BasketPage />, "Корзина", false, true),
  new PageRoute("*", <NotFoundPage />, "404", false, false),
];
