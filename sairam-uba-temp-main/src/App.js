import { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

//import FooterContainer from "./components/FooterContainer/Footer";

import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import Footer from "./components/FooterContainer/Footer";
function App() {
    const navRef = useRef(null);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onScroll = () => {
        if (window.scrollY > navRef.current.offsetTop) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    return (
        <BrowserRouter>
            <Header />
            <div style={{ position: "relative" }} ref={navRef}>
                <Navbar fixed={fixed} />
                <div style={{ paddingTop: "45px" }}>
                    <Routes />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
