import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
      <Navbar title="Student Management System" navColor="info" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
