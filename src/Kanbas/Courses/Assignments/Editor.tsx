export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="ms-5">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name</label>
                <input className="form-control"
                    id="wd-name" value="A1" />
            </div>

            <textarea id="wd-description" className="form-control mb-3">
                The assignment is available online Submit a link to the landing page of ...
            </textarea>

            <form id="wd-assignment-properties">
                <div className="row mb-3">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">
                        Points</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="wd-points" value={100} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label">
                        Assignment Group</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">
                        Display Grade as</label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-display-grade-as">
                            <option selected>Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2">
                        Submission Type</label>
                    <div className="border rounded col-sm-10">
                        <div className="m-3">
                            <select className="form-select m-2" id="wd-submission-type">
                                <option selected>Online</option>
                            </select>
                            <label className="mt-2 mb-2 fw-bold">Online Entry Options</label>
                            <br />
                            <div className="m-2 mb-3">
                                <input className="form-check-input me-2" type="checkbox"
                                    name="online-entry-options" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">
                                    Text Entry</label>
                            </div>
                            <div className="m-2 mb-3">
                                <input className="form-check-input me-2" type="checkbox"
                                    name="online-entry-options" id="wd-website-url" checked />
                                <label className="form-check-label" htmlFor="wd-website-url">
                                    Website URL</label>
                            </div>
                            <div className="m-2 mb-3">
                                <input className="form-check-input me-2" type="checkbox"
                                    name="online-entry-options" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">
                                    Media Recordings</label>
                            </div>
                            <div className="m-2 mb-3">
                                <input className="form-check-input me-2" type="checkbox"
                                    name="online-entry-options" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">
                                    Student Annotation</label>
                            </div>
                            <div className="m-2 mb-3">
                                <input className="form-check-input me-2" type="checkbox"
                                    name="online-entry-options" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">
                                    File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Assign</label>
                    <div className="border rounded col-sm-10">
                        <div className="m-3">
                            <label htmlFor="wd-assign-to" className="col-form-label fw-bold mb-1">Assign to</label><br />
                            <input id="wd-assign-to" className="form-control" value="Everyone" />
                        </div>
                        <div className="m-3">
                            <label htmlFor="wd-due-date" className="col-form-label fw-bold mb-1">Due</label><br />
                            <input id="wd-due-date" className="form-control" type="date" value="2024-05-13" />
                        </div>
                        <div className="m-3 d-flex">
                            <div className="flex-fill me-1">
                                <label htmlFor="wd-available-from" className="col-form-label fw-bold mb-1">Available from</label><br />
                                <input id="wd-available-from" className="form-control" type="date" value="2024-05-06" />
                            </div>
                            <div className="flex-fill">
                                <label htmlFor="wd-available-until" className="col-form-label fw-bold mb-1">Available until</label><br />
                                <input id="wd-available-until" className="form-control" type="date" />
                            </div>

                        </div>
                    </div>
                </div>
            </form>

            <hr />
            <div className="float-end">
                <button id="wd-save-btn" className="btn btn-md btn-danger me-2 float-end">
                    Save
                </button>
                <button id="wd-cancel-btn" className="btn btn-md btn-secondary me-2 float-end">
                    Cancel</button>
            </div>


        </div>
    );
}

