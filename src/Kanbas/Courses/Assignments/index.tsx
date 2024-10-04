import AssignmentControls from "./AssignmentControls";
import AssignmentsButtons from "./AssignmentsButtons";
import A1Buttons from "./A1Buttons";
import { RxTriangleDown } from "react-icons/rx";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";

export default function Assignments() {
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
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray d-flex align-items-center">
          <BsGripVertical className="ms-1 me-2 fs-2" />
          <TbFilePencil className="me-2 fs-2 text-success" />
          <div className="m-3">
            <a className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/1">
              A1
            </a>
            <p className="fs-6"><span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00 am |
              <strong> Due</strong> May 13 at 11:59 pm | 100 pts</p>
          </div>
          <A1Buttons />

        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray d-flex align-items-center">
          <BsGripVertical className="ms-1 me-2 fs-2" />
          <TbFilePencil className="me-2 fs-2 text-success" />
          <div className="m-3">
            <a className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/2">
              A2
            </a>
            <p className="fs-6"><span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00 am |
              <strong> Due</strong> May 20 at 11:59 pm | 100 pts</p>
          </div>
          <A1Buttons />
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray d-flex align-items-center">
          <BsGripVertical className="ms-1 me-2 fs-2" />
          <TbFilePencil className="me-2 fs-2 text-success" />
          <div className="m-3">
            <a className="wd-assignment-link fw-bold"
              href="#/Kanbas/Courses/1234/Assignments/3">
              A3
            </a>
            <p className="fs-6"><span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00 am |
              <strong> Due</strong> May 27 at 11:59 pm | 100 pts</p>
          </div>
          <A1Buttons />
        </li>
      </ul>
    </div>
  );
}
