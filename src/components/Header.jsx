import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header-content">
                <nav className="site-nav">
                    <Link to = "/">Home</Link>
                    <Link to = "/my-plants">My Plants</Link>
                    <Link to = "/about">About</Link>
                </nav>
            </div>
        </header>
    )
}