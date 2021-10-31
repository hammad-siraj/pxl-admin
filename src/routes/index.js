import { lazy } from "react";
const Home = lazy(() => import("../containers/Home"));

export const ROUTES = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
