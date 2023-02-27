import * as React from "react";
import Stack from "react-bootstrap/Stack";
import Header from "./Header";
import "./MainPage.scss";
import NavBar from "./NavBar";
import Home from "../home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Shop from "../shop/Shop";

export default function MainPage() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1200);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const router = createBrowserRouter([
    { path: "/", element: <Home isMobile={isMobile} /> },
    { path: "/shop", element: <Shop /> },
    { path: "/about", element: <About isMobile={isMobile} /> },
    { path: "/contact", element: <Contact isMobile={isMobile} /> },
  ]);

  return (
    <Stack gap={3} className="main">
      <Header />
      <NavBar />
      <RouterProvider router={router} />
    </Stack>
  );
}
