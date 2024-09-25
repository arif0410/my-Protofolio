const FooterLayouts = (props) => {
    const { children } = props;
    return (
        <>
            <footer className="p-5 bg-slate-200 mt-32 text-gray-800 py-6 w-full">
                <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img src="/image.png" alt="logo" className="h-13 w-32 mb-4" />
                    <h3 className="text-xl font-semibold">
                    Gali potensi Anda melalui Pembelajaran Video di Hariesok.id!
                    </h3>
                    <h4 className="mt-2">
                    Jl. Usman Efendi no. 50 Lowokwaru, Malang
                    <br />
                    +62 812 3456 7890
                    </h4>
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap justify-between">
                    <div className="w-1/2 md:w-auto mb-4">
                    <h4 className="font-semibold mb-2">Kategori</h4>
                    <ul>
                        <li>Digital &amp; Teknologi</li>
                        <li>Pemasaran</li>
                        <li>Manajemen Bisnis</li>
                        <li>Pengembangan Diri</li>
                        <li>Desain</li>
                    </ul>
                    </div>
                    <div className="w-1/2 md:w-auto mb-4">
                    <h4 className="font-semibold mb-2">Perusahaan</h4>
                    <ul>
                        <li>Tentang Kami</li>
                        <li>FAQ</li>
                        <li>Kebijakan Privasi</li>
                        <li>Ketentuan Layanan</li>
                        <li>Bantuan</li>
                    </ul>
                    </div>
                    <div className="w-full md:w-auto">
                    <h4 className="font-semibold mb-2">Komunitas</h4>
                    <ul>
                        <li>Tips Sukses</li>
                        <li>Blog</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="mt-6 text-left">
                <p>© 2023 Arif Ibrahim. Goes To Work.</p>
                </div>
            </footer>
        </>
    );
}

export default FooterLayouts;