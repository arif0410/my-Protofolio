const NavLayouts = (props) => {
    const { children } = props;
    return (
        <>
            <header className="w-full border-b px-4 sticky top-0 bg-white shadow-md z-50">
                <nav className="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between gap-8">
                    <a
                        href="https://www.figma.com/design/IufFgHHmVZ2380zb1yjjlX/VideoBelajar-1.0-(Copy)?node-id=506-28701&t=bK9UXwfHgxvF7V4M-4"
                        className="flex items-center"
                    >
                        <img
                            src="/image.png"
                            alt="logo"
                            className="mx-3 h-[25px] w-[180px]"
                        />
                    </a>
                    <ul>
                        <li>{children}</li>
                    </ul>
                </nav> 
            </header>
        </> 
    );
};

export default NavLayouts;
