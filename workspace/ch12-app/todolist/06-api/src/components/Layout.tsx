import Header from "@components/Header";
import Footer from "@components/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="todoapp">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;