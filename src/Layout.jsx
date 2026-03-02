import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlowerPlantLogo from "./assets/FlowerPlantLogo.png";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="site-logo-row">
                <Link to="/" aria-label="Go to Home">
                    <img src={FlowerPlantLogo} alt="Flower Plant Logo" className="site-header-logo" />
                </Link>
            </div>
            <main className="site-main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}