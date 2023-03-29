import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import MainView from "./component/MainView";

const Routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/main", element: <MainView /> },
]);

export default Routes;
