import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block me-3">
      <Link id="wd-account-signin" className="list-group-item active border border-0" to="/Kanbas/Account/Signin">Signin</Link>
      <Link id="wd-account-signup" className="list-group-item text-danger border border-0" to="/Kanbas/Account/Signup">Signup</Link>
      <Link id="wd-account-profile" className="list-group-item text-danger border border-0" to="/Kanbas/Account/Profile">Profile</Link>
    </div>

  );
}
