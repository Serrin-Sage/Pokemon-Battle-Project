import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to={'/'} className="link-title">Team</Link>
            <Link to={'/battle'} className="link-title">Battle!</Link>
            <Link to={'/store'} className="link-title">Store</Link>
        </div>
    )
}

export default Navbar