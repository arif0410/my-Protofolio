const input = (props) => {
    const { type, placeholder, name } = props;
    return(
        <input 
            type={type} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder={placeholder} 
            name={name}
            id={name}
        />
    )
}

export default input;