import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/indexPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export default routes;