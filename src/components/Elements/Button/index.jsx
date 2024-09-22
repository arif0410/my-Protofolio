const Button = (props) => {
    const {children = "tombol", warna ="bg-green-200", onClick =() => {}, type="button" } = props;
        return(
          <button className={`w-full  text-white py-2 px-4 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 focus:ring-opacity-50 ${warna} `} type={type} onClick={ onClick}>
          {children}
          </button>
          );
    }

    export default Button;