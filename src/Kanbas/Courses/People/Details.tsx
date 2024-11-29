import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../../Account/client";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameEditing, setNameEditing] = useState(false);
    const [emailEditing, setEmailEditing] = useState(false);

    const updateEmail = async () => {
        const updatedUser = { ...user, email }; // create a new user object with updated email
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEmailEditing(false);
        navigate(-1);
    }

    const updateRole = async (role: string) => {
        const updatedUser = { ...user, role }; // create a new user object with updated role
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        navigate(-1);
    }

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName }; // create a new user object with updated first and last name
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setNameEditing(false);
        navigate(-1);
    };

    const navigate = useNavigate();
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
    };
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);
    if (!uid) return null; // if there is no user id, return null (don't show anything)

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" /> </button>
            <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
            <div className="text-danger fs-4 wd-name">
                {!nameEditing && (
                    <FaPencil onClick={() => setNameEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit" />)}
                {nameEditing && (
                    <FaCheck onClick={() => saveUser()} // save the user when the check icon is clicked
                        className="float-end fs-5 mt-2 me-2 wd-save" />)}
                {!nameEditing && (
                    <div className="wd-name"
                        onClick={() => setNameEditing(true)}>
                        {user.firstName} {user.lastName}</div>)}
                {user && nameEditing && ( // show the input field when editing is true
                    <input className="form-control w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }} />)}
            </div>
            <b>Role:</b>
            <div className="wd-roles">
                <select value={user.role} onChange={(e) => updateRole(e.target.value)}
                    className="form-select float-start w-30 wd-select-role" >
                    <option value="STUDENT">Student</option>
                    <option value="TA">TA</option> <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Administrator</option>
                </select>
            </div> <br />
            <div className="wd-email">
                <b>Email: </b>
                {!emailEditing && (
                    <FaPencil onClick={() => setEmailEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit" />)}
                {emailEditing && (
                    <FaCheck onClick={() => updateEmail()} // save the user when the check icon is clicked
                        className="float-end fs-5 mt-2 me-2 wd-save" />)}
                {!emailEditing && (
                    <div className="wd-email"
                        onClick={() => setEmailEditing(true)}>
                        {user.email}</div>)}
                {user && emailEditing && ( // show the input field when editing is true
                    <input className="form-control w-50 wd-edit-email"
                        type="email"
                        defaultValue={`${user.email}`}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { updateEmail(); }
                        }} />)}
            </div>
            <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
            <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
            <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
            <button onClick={() => navigate(-1)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
        </div>);
}

