const Card = (props) => {
    const { children } = props;
    return (
        <div className="w-full md:w-1/2">
            <div className="shadow bg-white rounded-lg p-6">
                {children}
            </div>
        </div>
    );
};

export default Card;
