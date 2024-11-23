import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
  enrollments: enrollments,
  showEnrolledOnly: false,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => { // set the enrollments in the store
      state.enrollments = action.payload;
    }, 
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._user !== enrollment.user && e.course !== enrollment.course);
    },
    setShowEnrolledOnly: (state, action) => {
      state.showEnrolledOnly = action.payload;
    }
  },
});
export const { addEnrollment, deleteEnrollment, setEnrollments, setShowEnrolledOnly } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;