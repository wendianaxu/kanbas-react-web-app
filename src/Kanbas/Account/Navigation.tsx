import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"]; // show Profile if user is signed in, otherwise show Signin and Signup
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block me-3">
      {links.map((link) => ( // map through the links and create a Link component for each
        <Link
          key={link}
          id={`wd-account-${link.toLowerCase()}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}
          to={`/Kanbas/Account/${link}`}
        >
          {link}
        </Link>
      ))}
    </div>

  );
}
