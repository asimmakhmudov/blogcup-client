import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { axiosInstance } from "../../config";

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context)
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axiosInstance.post("api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }
    catch(err){
      dispatch({type:"LOGIN_FAILURE"});
      setError(true);
    }
  };
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
          required
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
          required
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong!</span>}
      </form>
      <Link className="link loginRegister"  to="/register">
        If you don't have an account, click here to register.
        <button className="loginRegisterButton">Sign Up</button>
      </Link>
    </div>
  );
};
