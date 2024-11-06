import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser) {
        return children; // if user is signed in, render the children (the protected screen/component)
    } else {
        return <Navigate to="/Kanbas/Account/Signin" />; // if user is not signed in, redirect to the Signin screen
    }

}
