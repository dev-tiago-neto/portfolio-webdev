import { Outlet } from "react-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-secondary-light min-h-screen dark:bg-primary-dark flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
