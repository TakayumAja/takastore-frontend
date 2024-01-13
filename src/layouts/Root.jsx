import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Root;
