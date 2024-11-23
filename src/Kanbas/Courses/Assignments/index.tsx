import AssignmentControls from "./AssignmentControls";
import AssignmentsButtons from "./AssignmentsButtons";
import A1Buttons from "./A1Buttons";
import { RxTriangleDown } from "react-icons/rx";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import { useParams } from "react-router";
// import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";

import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";


export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => { // fetch the assignments when the component mounts
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId); // delete assignment on the server
    dispatch(deleteAssignment(assignmentId)); // delete the assignment from the store
  };
 

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
          //.filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
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
                  {assignment.availableFrom.split("T")[0]} at {assignment.availableFrom.split("T")[1]} |
                  <strong> Due </strong>
                  {assignment.due.split("T")[0]} at {assignment.due.split("T")[1]} |
                  &nbsp;{assignment.points} pts</p>
              </div>
              <A1Buttons assignmentId={assignment._id}
                deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} />
            </li>
          ))}

      </ul>
    </div>
  );
}
