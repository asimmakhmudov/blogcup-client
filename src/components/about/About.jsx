// import { useEffect, useState } from "react";
// import { axiosInstance } from "../../config";
import "./about.css";
import sidebarImg from "../../assets/sidebarImg.jpg";

export default function Sidebar() {
  // const [cats, setCat] = useState([]);
  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axiosInstance.get("api/categories");
  //     setCat(res.data);
  //   };
  //   getCats();
  // }, []);

  return (
    <div className="sidebar">
      <img src={sidebarImg} alt="me" className="sidebarImg" />
      <div className="sidebarItem">
        <span className="sidebarTitle">SOCIAL</span>
        <div className="sidebarSocial">
            <a href="/">
              <i className="sidebarIcon fab fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="sidebarIcon fab fa-pinterest-square"></i>
            </a>
            <a href="/">
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </a>
        </div>
      </div>
      <div className="sidebarItem">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}
