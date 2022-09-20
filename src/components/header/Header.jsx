import "./header.css";
import headerImg from "../../assets/headerimage.jpeg";
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Lemon's</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src={headerImg} className="headerImg" alt="headerImg" />
    </div>
  )
}
