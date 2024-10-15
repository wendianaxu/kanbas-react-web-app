import AssignmentControls from "./AssignmentControls";
import AssignmentsButtons from "./AssignmentsButtons";
import A1Buttons from "./A1Buttons";
import { RxTriangleDown } from "react-icons/rx";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const testassignment = assignments.filter((assignment) => assignment.course === cid).filter((assignment) => assignment._id === "A101");
  console.log(new Date(testassignment[0].due).toDateString());
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /><br /><br /><br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-1 fs-3" />
          <RxTriangleDown className="me-2 fs-3" />
          <strong>ASSIGNMENTS</strong>
          <AssignmentsButtons />
        </div>
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <li 
            key={assignment._id}
            className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray d-flex align-items-center">
              <BsGripVertical className="ms-1 me-2 fs-2" />
              <TbFilePencil className="me-2 fs-2 text-success" />
              <div className="m-3">
                <a className="wd-assignment-link fw-bold"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </a>
                <p className="fs-6"><span className="text-danger">Multiple Modules</span> | 
                <strong> Not available until </strong> 
                {assignment.available.split("T")[0]} at {assignment.available.split("T")[1]} |
                  <strong> Due </strong> 
                  {assignment.due.split("T")[0]} at {assignment.due.split("T")[1]} |
                  &nbsp;{assignment.points} pts</p>
              </div>
              <A1Buttons />
            </li>
          ))}

      </ul>
    </div>
  );
}
