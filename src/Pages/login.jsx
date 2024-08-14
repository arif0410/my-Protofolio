import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FromLogin"
import { Link } from "react-router-dom";

const LoginPage = () => {
    
    return (
        <AuthLayouts title="Login" type="login">
            <div className="flex items-center justify-center bg-gray-100">

            <FormLogin/>
            </div>
            
        </AuthLayouts>
    )
}

export default LoginPage;