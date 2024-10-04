import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" >
      <h2>Profile</h2>
      <input id="wd-username" value="alice" placeholder="username" className="form-control"/><br/>
      <input id="wd-password" value="123" placeholder="password" className="form-control"/><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control"/><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control"/><br/>
      <input id="wd-dob" value="mm-dd-yyyy" type="date" className="form-control"/><br/>
      <input id="wd-email" value="alice@wonderland.com" type="email" className="form-control"/><br/>
      <select id="wd-role" className="form-control">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <button id="wd-signout-btn" className="btn btn-danger me-2 w-100">
                    Sign out</button>
    </div>
);}

