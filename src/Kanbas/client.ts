import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollments = async (uId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${uId}`);
    return response.data;
}

export const enrollUser = async (cId: string, uId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${cId}/${uId}`);
    return response.data;
}

export const unenrollUser = async (cId: string, uId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${cId}/${uId}`); 
    return response.data;
};
