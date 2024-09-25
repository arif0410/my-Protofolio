
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

export default AuthLayouts;
