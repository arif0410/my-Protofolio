const label = (props) => {
    const {htmlFor,children} = props;
    return(
        <label
            htmlFor={htmlFor}
            className="block text-gray-700 text-sm font-bold mb-2"
            >
            {children}
        </label>
    )
}



export default label;