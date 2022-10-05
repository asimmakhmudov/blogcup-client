import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { user, dispatch } = useContext(Context);
    const PF = "https://blogcup.herokuapp.com/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    {user && (
                        <li className="nav-item">
                            <Link
                                to="/settings"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <li className="nav-item">
                                    <img
                                        className="topImg"
                                        src={
                                            user.profilePic
                                                ? PF + user.profilePic
                                                : "https://i.pinimg.com/originals/19/46/37/19463736543a1a231b63bbdf8bf5196a.jpg"
                                        }
                                        alt="profile"
                                    />
                                </li>
                            </Link>
                        </li>
                    )}
                    <Link to="/" className="nav-links">
                        BLOGCUP
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
                            FAQ
                        </Link>
                    </li>
                    {user?.isAdmin && (
                        <li className="nav-item">
                            <Link to="/write" className="nav-links" onClick={closeMobileMenu}>
                                Write
                            </Link>
                        </li>
                    )}
                    {user ? (
                        <>
                            <div className="nav-item" onClick={closeMobileMenu}>
                                <Link
                                    to="/settings"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    <li className="btn">
                                        Settings
                                    </li>
                                </Link>
                                <li className="btn" onClick={handleLogout}>
                                    {user && "LOGOUT"}
                                </li>
                            </div>
                        </>
                    ) : (
                        <>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Button link="/login" content="LOGIN" />
                            </li>
                            <li className="nav-item" onClick={closeMobileMenu}>
                                <Button link="/register" content="SIGN UP" />
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
