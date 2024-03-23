import {ReactNode} from "react";

interface IRoute {
  path: string;
  element: ReactNode;
  name: string;
  inNavBar: boolean;
}

export default IRoute;
