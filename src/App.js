import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Navbar from "./components/navbar/Navbar";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavbarMobile from "./components/navbar-mobile/NavbarMobile";

const App = () => {
  const [mobileView, setMobileView] = useState(false);

  // SCREEN LOADER
  const [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (window.innerWidth <= "768") {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [mobileView]);

  // DARK MODE CODE
  const [mode, setMode] = useState(false);

  return (
    <>
      {loading ? (
        <RingLoader
          color={"var(--color-accent)"}
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <BrowserRouter>
            {mobileView ? (
              <NavbarMobile mode={mode} setMode={setMode} />
            ) : (
              <Navbar mode={mode} setMode={setMode} />
            )}
            <Routes>
              <Route path="/" element={<About mode={mode} />} />
              <Route path="/work" element={<Work mode={mode} />} />
              <Route path="/contact" element={<Contact mode={mode} />} />
            </Routes>
            <Footer mode={mode} setMode={setMode} />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
