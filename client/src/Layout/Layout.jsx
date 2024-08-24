import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
