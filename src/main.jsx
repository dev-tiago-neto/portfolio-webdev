import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import Projetos from "./pages/Projetos.jsx";
import DetalheProjeto from "./pages/DetalheProjeto.jsx";

export const routes = [
  {
    index: true,
    name: "Início",
    element: <Home />,
  },
  {
    path: "/sobre",
    name: "Sobre",
  },
  {
    path: "/projetos",
    name: "Projetos",
    element: <Projetos />,
  },
  {
    path: "/projetos/:id",
    element: <DetalheProjeto />,
  },
  {
    path: "/contato",
    name: "Contato",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...routes,
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
