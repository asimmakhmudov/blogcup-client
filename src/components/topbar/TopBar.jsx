import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://limonblog.herokuapp.com/images/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
    // classList  toggle ("show")
    const menu = document.querySelector(".topCenter");
    menuOpen ? menu.classList.remove("show") : menu.classList.add("show")
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <div className="top">
      <div className={`topCenter`}>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          {user?.isAdmin && (
            <li className="topListItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
          )}
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={
                user.profilePic
                  ? PF + user.profilePic
                  : "https://www.kollywoodupdate.com/files/news/1617851797_dummy-man.png"
              }
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {menuOpen ? (<i className="hamMenu fa-sharp fa-solid fa-times" onClick={menuToggleHandler}></i>) : (<i className="hamMenu fa-sharp fa-solid fa-bars" onClick={menuToggleHandler}></i>) }
      </div>
    </div>
  );
}
