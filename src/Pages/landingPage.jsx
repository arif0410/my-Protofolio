const landingPage = () => {
    return (
        <body class="bg-gray-600 min-h-screen">

       
        <header className="bg-slate-200 bg-opacity-80 shadow border-cyan-700 border-spacing-8 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-xl font-bold text-gray-800">Arif Ibrahim</div>
                <nav className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-black hover:font-bold transition-transform duration-300">Home</a>
                    <a href="#" className="text-gray-600 hover:text-black hover:font-bold transition-transform duration-300">Karya</a>
                    <a href="#" className="text-gray-600 hover:text-black hover:font-bold transition-transform duration-300">Contact</a>
                </nav>
            </div>
        </header>

    
        
        <section class="bg-gradient-to-b from-blue-600 to-blue-400 text-white h-screen">
            <div class="container mx-auto flex flex-col md:flex-row items-center py-20 px-6">
                <div class="md:w-1/2 mb-8 md:mb-0 md:mr-10 flex justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_OC3dhkmQKBeoki5bBnr_z5gFmFz3dnptw&s" alt="Arif Ibrahim" class="rounded-full shadow-lg w-48 h-48 object-cover" />
                </div>
                <div class="md:w-1/2 text-center md:text-left">
                    <h1 class="text-4xl font-bold mb-4">Hi, I'm <b class="text-sky-500">Arif Ibrahim</b></h1>
                    <p class="text-3xl font-light mb-8">Saya merupakan seorang junior web developer. Saya sedang belajar React JS dan Next JS. Sebelumnya, saya adalah Fullstack Developer dengan PHP dan framework Laravel.</p>
                </div>
            </div>
        </section>
            
        
        <section class="bg-gradient-to-b from-blue-400 to-white text-gray-800 h-screen py-20 px-6">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">Aplication</h2>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="text-blue-600 mb-4">
                                <img src="/gummy.png" alt="gambas POS" />
                            </div>
                            <h3 class="text-xl font-semibold mb-4">Point of Sales</h3>
                            <p class="text-gray-600">Aplikasi Point of Sales merupakan perangkat lunak yang digunakan untuk memproses transaksi penjualan, mengelola inventaris, dan menghasilkan laporan keuangan.</p>
                            <p class="text-gray-600 text-xl font-bold"><a href="https://github.com/arif0410/gummy-pos.git">Link Git </a></p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="text-blue-600 mb-4">
                                <img src="/siperpus.png" alt="gambar siperpus" />
                            </div>
                            <h3 class="text-xl font-semibold mb-4">Siperpus</h3>
                            <p class="text-gray-600">Aplikasi perpustakaan adalah perangkat lunak yang digunakan untuk mengelola koleksi buku, peminjaman, pengembalian, dan data anggota perpustakaan secara efisien.</p>
                            <p class="text-gray-600 text-xl font-bold"><a href="https://github.com/arif0410/siperpus.git">Link Git </a></p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-4 mb-8">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="text-blue-600 mb-4">
                            <img src="/gummy.png" alt="" /> 
                            </div>
                            <h3 class="text-xl font-semibold mb-4">EDP</h3>
                            <p class="text-gray-600">Aplikasi EDP adalah perangkat lunak yang digunakan untuk memproses transaksi penjualan, mengelola inventaris, dan meng-gayakan laporan keuangan di berbagai jenis bisnis.</p>
                            <p class="text-gray-600 text-xl font-bold"><a href="https://github.com/arif0410/siperpus.git">Link Git </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        
        <footer className="bg-gray-800 text-white py-6 w-full fixed bottom-0">
            <div className="container mx-auto text-center">
                 <p>&copy; 2024 Arif Ibrahim. Goes To Work.</p>
            </div>
        </footer>

    
    </body>
            )
}
export default landingPage;