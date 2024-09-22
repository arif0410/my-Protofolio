
const AuthLayouts = (props) => {
    const { children, title, type } = props;
    
    return (
      <>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">    
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">     
            {children}
          </div>
        </div>
      </>      
    );
};

// const Navigation =({type}) =>{
//     if (type === "login") {
//         return (
//             <p className="text-center text-slate-500 text-sm mt-5">
//                 Don't Have an Account.?{" "} 
//                 <Link to="/register" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
//             </p>
//         )
//     }else{
//         return (
//             <p className="text-center text-slate-500 text-sm mt-5">
//                 Have an Account.?{" "} 
//                 <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign In</Link>
//             </p>
//         )
//     }
// }

export default AuthLayouts;
