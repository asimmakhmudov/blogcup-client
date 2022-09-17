import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { axiosInstance } from "../../config";
import axios from "axios";

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);
  const PF = "https://limonblog.herokuapp.com/images/";

  const deleteUser = async () => {
    try {
      await axiosInstance.delete(`api/users/${user._id}`);
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await axios.put("https://limonblog.herokuapp.com/api/upload", data);
          setSuccess(true);
        } catch (err) {}
      }
      try {
        const res = await axiosInstance.put("api/users/" + user._id, updatedUser);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={deleteUser}>Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt="profilepic"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username + " (Enter new username or leave blank to keep current username)"} 
            onChange={(e) => setUsername(e.target.value)}
            // required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email + " (Enter new email or leave blank to keep the same)"}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <label>New Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password or leave blank to keep the same"
            // required
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", margin: "15px 0", textAlign: "center" }}
            >
              Profile has been updated!
            </span>
          )}
        </form>
      </div>
      <div className="mobileSidebar">
        <Sidebar />
      </div>
    </div>
  );
};
