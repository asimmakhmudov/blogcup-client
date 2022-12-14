import "./settings.css";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { axiosInstance } from "../../config";
import axios from "axios";
// import { AllUsers } from "../../components/allusers/AllUsers";

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  // const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);
  // const PF = "https://blogcup.herokuapp.com/images/";

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
      // if (file) {
        //   const filename = Date.now() + file.name;
        //   data.append("name", filename);
        //   data.append("file", file);
        //   updatedUser.profilePic = filename;
        // }
      const data = new FormData();
      try {
        await axios.post("https://blogcup.herokuapp.com/api/upload/", data);
        setSuccess(true);
      } catch (err) {}
      try {
        const res = await axiosInstance.put(
          "api/users/" + user._id,
          updatedUser
        );
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
          <div className="settingsUpdateTitle">Update Your Account</div>
          <div className="settingsDeleteTitle" onClick={deleteUser}>
            Delete Your Account
          </div>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          {/* <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilePic ? PF + user.profilePic : "https://i.pinimg.com/originals/19/46/37/19463736543a1a231b63bbdf8bf5196a.jpg"}
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
          /> */}
          <label>Username</label>
          <input
            type="text"
            placeholder={
              user.username +
              " (Enter new username or leave blank to keep current username)"
            }
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            // required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={
              user.email + " (Enter new email or leave blank to keep the same)"
            }
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
        {/* <AllUsers /> */}
      </div>
    </div>
  );
};
