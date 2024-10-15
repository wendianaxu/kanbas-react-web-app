import { CiDesktop } from "react-icons/ci";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block">
      <Link id="wd-course-home-link" className={`list-group-item border border-0 ${pathname.includes("Home") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Home`}>Home</Link>
      <Link id="wd-course-modules-link" className={`list-group-item border border-0 ${pathname.includes("Modules") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Modules`}>Modules
        </Link>
      <Link id="wd-course-piazza-link"  className={`list-group-item border border-0 ${pathname.includes("Piazza") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Piazza`}>Piazza</Link>
      <Link id="wd-course-zoom-link"    className={`list-group-item border border-0 ${pathname.includes("Zoom") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Zoom`}>Zoom</Link>
      <Link id="wd-course-quizzes-link" className={`list-group-item border border-0 ${pathname.includes("Assignments") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Assignments`}>
          Assignments</Link>
      <Link id="wd-course-assignments-link" className={`list-group-item border border-0 ${pathname.includes("Quizzes") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Quizzes`}>Quizzes
        </Link>
      <Link id="wd-course-grades-link"  className={`list-group-item border border-0 ${pathname.includes("Grades") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/Grades`}>Grades</Link>
      <Link id="wd-course-people-link"  className={`list-group-item border border-0 ${pathname.includes("People") ? "active" : "text-danger"}`} to={`/Kanbas/Courses/${cid}/People`}>People</Link>
    </div>
);}

