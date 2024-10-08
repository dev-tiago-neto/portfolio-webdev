import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import DetalheProjeto from "./pages/DetalheProjeto.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import NotFound from "./pages/NotFound.jsx";

export const routes = [
  {
    index: true,
    name: "Início",
    element: <Home />,
  },
  {
    path: "/sobre",
    name: "Sobre",
    element: <Sobre />,
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
    element: <Contato />,
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
