import { Link } from "react-router-dom";
// import * as db from "./Database";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacultyProtectedRoute from "./Account/FacultyProtectedRoute";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
import { addEnrollment, deleteEnrollment, setEnrollments, setShowEnrolledOnly } from "./EnrollmentsReducer";
import * as enrollmentsClient from "./client";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showEnrolledOnly } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const fetchEnrollments = async () => { // fetch enrollments for current user from the server and set them in the store
    const enrollments = await enrollmentsClient.findEnrollments(currentUser._id as string);
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  //const [showEnrolledOnly, setShowEnrolledOnly] = useState(false); // state variable indicating if only enrolled courses are shown

  const toggleEnrollmentView = () => {
    dispatch(setShowEnrolledOnly(!showEnrolledOnly)); 
  };

/*   const [enrollmentStatus, setEnrollmentStatus] = useState( // state variable for the enrollment status of each course
    courses.reduce((status, course) => {
      status[course._id] = enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === course._id
      );
      return status;
    }, {})
  ); */

  const enrollmentStatus = courses.reduce((status, course) => { // dynamically calculate enrollment status of each course
    status[course._id] = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    );
    return status;
  }, {});

  const handleAddEnrollment = async (courseId: any) => {
    await enrollmentsClient.enrollUser(courseId, currentUser._id); // enroll user on the server
    dispatch(addEnrollment({ user: currentUser._id, course: courseId })); // add enrollment to the store
    fetchEnrollments();
  }

  const handleDeleteEnrollment = async (courseId: any) => {
    await enrollmentsClient.unenrollUser(courseId, currentUser._id); // unenroll user on the server
    dispatch(deleteEnrollment({ user: currentUser._id, course: courseId })); // delete enrollment from the store
    fetchEnrollments();
  }

  const toggleEnrollment = (courseId: any) => { // toggle enrollment status of a course
    const isEnrolled = enrollmentStatus[courseId];
    if (isEnrolled) {
      handleDeleteEnrollment(courseId);
    } else {
      handleAddEnrollment(courseId);
    }
/*     setEnrollmentStatus({
      ...enrollmentStatus,
      [courseId]: !isEnrolled,
    }); */
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <FacultyProtectedRoute>
        <h5>New Course
          <button className="btn btn-primary float-end" /* add new course */
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>

          <button className="btn btn-warning float-end me-2" /* update course */
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5> <br />

        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
      </FacultyProtectedRoute>

      <StudentProtectedRoute>
        <button className="btn btn-primary float-end" /* enrollment button */
          id="wd-enrollment-btn"
          onClick={toggleEnrollmentView} >
          {showEnrolledOnly ? "Show all courses" : "Show enrolled courses"} </button>
      </StudentProtectedRoute>

      <h2 id="wd-dashboard-published">{
        showEnrolledOnly ? `Enrolled Courses (${enrollments.filter((enrollment: any) => enrollment.user === currentUser._id).length})`
          : `Published Courses (${courses.length})`
      }</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => !showEnrolledOnly || // don't filter by enrollment if showEnrolledOnly is false
              enrollments.some( // returns true if at least one element in the enrollments array matches the current user and course
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={enrollmentStatus[course._id] ? `/Kanbas/Courses/${course._id}/Home` : "#"} // navigate to course only when enrolled
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>

                      <FacultyProtectedRoute>
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course); /* copies the current course to the form so that it can be edited */
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </FacultyProtectedRoute>

                      <StudentProtectedRoute> {/* enrollment button */}
                        <button id="wd-enroll-btn"
                          onClick={(event) => {
                            event.preventDefault();
                            toggleEnrollment(course._id);
                          }} className={`btn float-end ${enrollmentStatus[course._id] ? "btn-danger" : "btn-success"}`}>
                          {enrollmentStatus[course._id] ? "Unenroll" : "Enroll"}
                        </button>
                      </StudentProtectedRoute>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
