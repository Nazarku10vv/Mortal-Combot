import { Navigate, Outlet } from "react-router-dom"
import { useMortalAuthProduct } from "../../context/AuthContext"

export const ProtectedRoutes = () => {
	const { user } = useMortalAuthProduct()

	function mortalIsAllowed() {
		if (user.email === "ramazan@gmail.com") {
			return true
		} else {
			return false
		}
	}
	mortalIsAllowed() ? (<Outlet/>) : (<Navigate to="sign_in"/>)
}
