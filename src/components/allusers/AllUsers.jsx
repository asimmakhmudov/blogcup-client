import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./alluser.css";

export const AllUsers = () => {
  const { user } = useContext(Context);
  const [users, setUsers] = useState([]);
  const headers = { token: `Bearer ${user?.accessToken}` };

  useEffect(() => {
    const getUsers = async () => {
      const res = await axiosInstance.get("api/users/", { headers });
      setUsers(res.data);
    };
    getUsers();
  });

  return (
    <div className="allusers">
      {user?.isAdmin && (
        <>
          <h2>All Users List</h2>
          <table className="settingsUsers">
            <thead className="settingsUser">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>isAdmin</th>
              </tr>
            </thead>
            {users.map((user) => (
              <tbody className="settingsUser">
                <tr>
                  <td className="settingsUserTitle">{user.username}</td>
                  <td className="settingsUserTitle">{user.email}</td>
                  <td className="settingsUserTitle">{user.isAdmin.toString()}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
};
