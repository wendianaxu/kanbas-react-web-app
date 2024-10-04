import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-2 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      
      <button id="wd-add-group" className="btn btn-lg btn-secondary me-2 float-end">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group</button>

      <div id="wd-search" className="position-relative float-start me-2">
        <CiSearch className="position-absolute me-2 fs-4" style={{ left: '10px', top: '25%' }} />
        <input className="form-control fs-5" placeholder="Search..." style={{ width: '300px', paddingLeft: '40px' }}/>
      </div>
      

    </div>
);}