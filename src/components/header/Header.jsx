import "./header.css";
import headerImg from "../../assets/headerimage.jpg";
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Asim Mahmudov's</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src={headerImg} className="headerImg" alt="headerImg" />
    </div>
  )
}
