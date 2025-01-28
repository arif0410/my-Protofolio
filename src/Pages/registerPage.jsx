import React, { useState } from 'react';
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input";
import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FromRegister';
import NavLayouts from '../components/Layouts/NavLayouts';

const RegisterPage = () => {
  const [users, setUsers] = useState([]);

  const handleRegister = (formData) => {
    setUsers([...users, formData]);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavLayouts />
      <AuthLayouts title="Register" type="register">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-0">Pendaftaran Akun</h2>
        <h3 className="text-center text-gray-600 mb-6">Yuk daftarkan akun kamu sekarang juga!</h3>
        <FormRegister onSubmit={handleRegister} />

        <div className="flex w-full items-center gap-3 mt-6">
          <hr className="flex-1 border-[#dfe1e6]" />
          <span>atau</span>
          <hr className="flex-1 border-[#dfe1e6]" />
        </div>

        <button
          className="flex items-center justify-center font-medium disabled:opacity-80 h-12 min-w-[144px] px-5 rounded-lg disabled:bg-gray-200 disabled:text-gray-600 disabled:cursor-not-allowed border hover:bg-gray-100 w-full gap-2 bg-white text-gray-900 enabled:border-gray-300 mt-4"
          type="button"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Masuk dengan Google
        </button>

        {users.length > 0 && (
          <table className="table-auto w-full mt-6 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Nama Lengkap</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{user.fullName}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(index)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </AuthLayouts>
    </>
  );
};

export default RegisterPage;