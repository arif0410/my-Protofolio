import React, { useState } from 'react';
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input";
import CountryFlag from 'react-country-flag';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FromRegister';
import NavLayouts from '../components/Layouts/NavLayouts';

const RegisterPage = (props) => {
     return (
        <>
            <NavLayouts/>
            <AuthLayouts title="Register" type="register">
                <h2 class="text-2xl font-bold text-center text-gray-800 mb-0">Pendaftaran Akun</h2>
                <h3 class="text-center text-gray-600 mb-6 ">Yuk daftarkan akun kamu sekarang juga!</h3>
                <FormRegister/>
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
    );
}

export default RegisterPage;
