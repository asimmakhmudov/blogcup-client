import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import { Home } from "./pages/home/Home";
import { Write } from "./components/write/Write";
import { Settings } from "./pages/settings/Settings";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Accordions } from "./pages/faq/Accordions";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { Footer } from "./components/footer/Footer";
import { SinglePost } from "./components/singlePost/SinglePost";


function App() {
  const {user} = useContext(Context);
  console.log("--------- Created by Asim Mahmudov ---------");
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/faq" element={ <Accordions/>}/>
        <Route path="/write" element={user?.isAdmin ? <Write/> : <Home/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/post/:postId" element={<SinglePost/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
