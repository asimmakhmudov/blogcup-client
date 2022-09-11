import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { axiosInstance } from "../../config";

export default function Sidebar() {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories")
      setCat(res.data)
    }
    getCats()
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src=""
          alt="me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          voluptatum. Natus autem distinctio dolorum, voluptatem aliquid
          nesciunt adipisci nihil perspiciatis officiis in
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats?.map(c => (
            <Link to={`/?cat=${c.name}`} className="link" key={c.name}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">SOCIAL</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
