// import { useEffect, useState } from "react";
// import { axiosInstance } from "../../config";
import "./about.css";
import sidebarImg from "../../assets/sidebarImg.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={sidebarImg} alt="me" className="sidebarImg" />
      <div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Laman Suleymanli</span>
          <div className="sidebarSocial">
            <a href="https://www.facebook.com/lyamansuleymanli" target="_blank" rel="noreferrer">
              <i className="sidebarIcon fab fa-facebook-square"></i>
            </a>
            <a href="https://instagram.com/laman.suleymanli?igshid=NmNmNjAwNzg=" target="_blank" rel="noreferrer">
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </a>
            {/* <a href="/">
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="sidebarIcon fab fa-pinterest-square"></i>
            </a> */}
          </div>
        </div>
        <div className="sidebarItem">
          <p>
            ▶️ Klinik psixologiya<br/><br/>
            Araşdırılacaq sahələr ⬇️ <br/><br/>
              ▶️ Psixoanaliz <br/>
              ▶️ Geştalt psixologiyası <br/>
              ▶️ CBT (Cognitive Behavioral Therapy) <br/>
              ▶️ Sosial psixologiya <br/>
              ▶️ Döl psixologiyası <br/>
          </p>
        </div>
      </div>
    </div>
  );
}
