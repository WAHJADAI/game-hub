import { createBrowserRouter } from "react-router-dom";
import  Layout  from "./pages/Layout";

import { GameDetailPage } from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Homepage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
