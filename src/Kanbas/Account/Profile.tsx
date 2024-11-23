import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile)); // update the current user in the store
  };

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin"); // if no user is signed in, redirect to Signin
    setProfile(currentUser); // set the profile to the current user
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null)); // set the current user to null
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []); // fetch the profile when the component mounts

  return (
    <div id="wd-profile-screen" >
      <h3>Profile</h3>
      {profile && (
        <div>
          <input defaultValue={profile.username} id="wd-username" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <input defaultValue={profile.password} id="wd-password" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <input defaultValue={profile.firstName} id="wd-firstname" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <input defaultValue={profile.lastName} id="wd-lastname" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <input defaultValue={profile.dob} id="wd-dob" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />
          <input defaultValue={profile.email} id="wd-email" className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <div>
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
            <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

