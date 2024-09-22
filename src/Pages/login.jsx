import AuthLayouts from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FromLogin"
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";

const LoginPage = () => {
    
    return (
        <>
            <header className="w-full border-b px-4 sticky top-0 bg-white shadow-md z-10 " >
                <nav className="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between gap-8">
                    <a
                        href="https://www.figma.com/design/IufFgHHmVZ2380zb1yjjlX/VideoBelajar-1.0-(Copy)?node-id=506-28701&t=bK9UXwfHgxvF7V4M-4"
                        className="flex items-center"
                    >
                        <img
                        src="/image.png"
                        alt="logo"
                        className=" flex justify-content-center mx-3 justify-between h-[25px] w-[180px]"
                        />
                    </a>
                </nav> 
            </header>
            <AuthLayouts title="Login" type="login">   
                <h2 class="text-2xl font-bold text-center text-gray-800 mb-0">Masuk Ke Akun</h2>
                <h3 class="text-center text-gray-600 mb-6 ">Yuk Lanjutin belajarmu di videobelajar</h3>
                <FormLogin/>
                    <a href="/register">
                        <Button warna="bg-green-300  w-full " type="submit">Daftar</Button>
                    </a>
                <div className="flex w-full items-center gap-3">
                    <hr className="flex-1 border-[#dfe1e6]" />
                        <span>atau</span>
                            <hr className="flex-1 border-[#dfe1e6]" />
                </div>
                <button
                    className="flex items-center justify-center font-medium disabled:opacity-80 h-12 min-w-[144px] px-5 rounded-lg disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-not-allowed border hover:bg-gray-100 w-full gap-2 bg-white text-gray-900 enabled:border-gray-300"
                    type="button"
                >
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        alt="Google Logo"
                        className="w-5 h-5"
                    />
                        Masuk dengan Google
                </button>                
            </AuthLayouts>
        </>
    )
}

export default LoginPage;