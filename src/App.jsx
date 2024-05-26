import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeTemplate from "./layouts/HomeTemplate/HomeTemplate";
import Region from "./pages/region/Region";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTemplate />,
    children: [
      { index: true, element: <Home /> },
      { path: "generation/:id", element: <Region /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
