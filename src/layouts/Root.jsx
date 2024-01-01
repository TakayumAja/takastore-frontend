import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
