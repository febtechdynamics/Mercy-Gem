import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Shared from "./components/sharedlayout/Shared";
import AboutDetail from "./components/about/AboutDetail";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import IndustrialDetail from "./components/IndustrialDetail/IndustrialDetail";
import GemstoneList from "./components/GemstonList/GemstonList";
import IndustrialList from "./components/IndutrialList/IndustrialList";
import { useEffect } from "react";
import Admin from "./components/Admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Admin/Products";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Shared />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<IndustrialDetail />} />
          <Route path="/about" element={<AboutDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gemston-list" element={<GemstoneList />} />
          <Route path="/industrial-list" element={<IndustrialList />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
