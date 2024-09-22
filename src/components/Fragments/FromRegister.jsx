import React, { useState } from 'react';
import CountryFlag from 'react-country-flag';
import InputForm from "../Elements/Input";

const FormRegister = (props) => {
    const [countryCode, setCountryCode] = useState('+62');

    const handleCountryChange = (e) => {
        setCountryCode(e.target.value);
    };

    const countryFlagMap = {
        '+62': 'ID', // Indonesia
        '+63': 'PH', // Philippines
        '+64': 'NZ', // New Zealand
        '+65': 'SG', // Singapore
    };

    const handleRegister = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.elements.email.value);
        localStorage.setItem('password', event.target.elements.password.value);
        window.location.href = "/product"; 
    };

    return (
        <>
            <form onSubmit={handleRegister}>
                <InputForm label="Nama" type="text" placeholder="Full Name" name="name"/>
                <InputForm label="Email" type="email" placeholder="Email@gmail.com" name="email"/>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        No HP<span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="flex items-center">
                        <CountryFlag 
                            countryCode={countryFlagMap[countryCode]} 
                            svg 
                            style={{
                                fontSize: '2em',
                                marginRight: '10px',
                            }}
                        />
                        <select 
                            name="country_code" 
                            id="country_code" 
                            onChange={handleCountryChange}
                            className="border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="+62">+62</option>
                            <option value="+63">+63</option>
                            <option value="+64">+64</option>
                            <option value="+65">+65</option>
                        </select>
                        <input
                            type="text"
                            name="no_hp"
                            className="w-full px-3 flex-2 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukan No HP"
                            required=""
                        />
                    </div>
                </div>

                <InputForm label="Password" type="password" placeholder="***********" name="password"/>
                <InputForm label="Konfirmasi Password" type="password" placeholder="***********" name="confirm_password"/>
                
                <button type="submit" className="bg-green-500 w-full py-2 text-white font-bold rounded-lg">
                    Daftar
                </button>
            </form>
        </>
    );
}

export default FormRegister;
