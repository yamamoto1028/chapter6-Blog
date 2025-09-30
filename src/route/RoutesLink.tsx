import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ArticleList from "../pages/ArticleList";
import RouterApp from "./RouterApp";

const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterApp />}>
      <Route path="/" element={<ArticleList />}></Route>
      <Route path="/detail"></Route>
      <Route path="/contact"></Route>
    </Route>
  )
);
export default RoutesLink;
