import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import RoutesLink from "./route/RoutesLink";
import { createRoot } from "react-dom/client";

function App() {
  createRoot(document.getElementById("root")!).render(
    <RouterProvider router={RoutesLink} />
  );
  return <></>;
}

export default App;
