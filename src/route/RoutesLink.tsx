import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ArticleList from "../pages/ArticleList";
import RouterApp from "./RouterApp";
import ArticleDetail from "../pages/ArticleDetail";
import InquiryPage from "../pages/InquiryPage";

const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterApp />}>
      <Route path="/" element={<ArticleList />}></Route>
      <Route path="/details/:id" element={<ArticleDetail />}></Route>
      <Route path="/inquiry" element={<InquiryPage />}></Route>
    </Route>
  )
);
export default RoutesLink;
