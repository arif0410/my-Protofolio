import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    
    return (
        <div className="flex border-slate-100 rounded-lg shadow-lg dark:border-slate-800 justify-center bg-slate-400 min-h-screen items-center">
        <div className="w-full max-w-xs border border-black rounded-xl px-4 shadow bg-slate-300 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">{title}</h1>
            <p className="font-medium text-slate-500 mb-8 text-center">Welcome, Please enter your details</p>
            {children}
            <Navigation type={type}/>
        </div>
    </div>
    
    );
};

const Navigation =({type}) =>{
    if (type === "login") {
        return (
            <p className="text-center text-slate-500 text-sm mt-5">
                Don't Have an Account.?{" "} 
                <Link to="/register" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
            </p>
        )
    }else{
        return (
            <p className="text-center text-slate-500 text-sm mt-5">
                Have an Account.?{" "} 
                <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign In</Link>
            </p>
        )
    }
}

export default AuthLayouts;
