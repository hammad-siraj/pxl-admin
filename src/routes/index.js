import { lazy } from "react";
const Home = lazy(() => import("../containers/Home"));
const Club = lazy(() => import("../components/Club"));
const Wallet = lazy(() => import("../components/Wallet"));
const Payment = lazy(() => import("../components/Payment"));
const Products = lazy(() => import("../components/Products"));
const Main = lazy(() => import("../components/SpeedGraph/Main"));
const ImageUploadPage = lazy(() =>
  import("../components/SpeedGraph/ImageUpload")
);
export const ROUTES = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/club",
    component: Club,
    exact: true,
  },
  {
    path: "/wallet",
    component: Wallet,
    exact: true,
  },
  {
    path: "/payment",
    component: Payment,
    exact: true,
  },
  {
    path: "/products",
    component: Products,
    exact: true,
  },
  {
    path: "/speedgraph",
    component: Main,
    exact: true,
  },
  {
    path: "/imageUpload",
    component: ImageUploadPage,
    exact: true,
  },
];
