import FooterLayouts from "../components/Layouts/FooterLayouts";
import NavLayouts from "../components/Layouts/NavLayouts";
import CardLayouts from "../components/Layouts/CardLayouts";
import Card from "../components/Elements/Card";
// import ProductForm from '../components/Crud_frontend/ProductForm';
// import ProductList from '../components/Crud_frontend/ProductList';

const crudR = () => {
    const images = [
        "/B41.jpeg",
        "/B42.jpeg",
        "/B43.jpeg",
        "/B44.jpeg",
        "/B45.jpeg",
        "/B46.jpeg",
        "/B47.jpeg",
        "/B48.jpeg",
        "/B49.jpeg",
    ];

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) setProducts(storedProducts);
  }, []);


  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    setEditIndex(index);
  };

  const resetEdit = () => setEditIndex(null);
    return (
        <>
            <NavLayouts>
                <nav id="menu" className="hidden lg:flex lg:items-center lg:space-x-6">
                    <ul className="lg:flex lg:space-x-6">
                        <li>
                            <a href="/" className="block text-gray-800 hover:text-cyan-700">
                                Crud
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-800 hover:text-cyan-700">
                                Kontak
                            </a>
                        </li>
                        <li>
                            <img className="w-8 h-8" src="/image1.png" alt="" />
                        </li>
                    </ul>
                </nav>
            </NavLayouts>

            <section
                className="mt-32 relative bg-black text-white py-20 px-6"
                style={{ marginLeft: "10%", marginRight: "10%" }}
            >
                <div className="absolute inset-0 bg-cover bg-center opacity-40">
                    <img src="/bgU.jpeg" alt="background_style" />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-3xl font-bold mb-12">
                        Revolusi Pembelajaran : Temukan Ilmu Baru melalui Platform Video interaktif!
                    </h1>
                    <h3 className="text-xl mb-4">
                        Temukan ilmu baru yang menarik dan mendalam melalui video pembelajaran
                        berkualitas tinggi.
                    </h3>
                    <h3 className="text-xl mb-12">
                        Anda juga dapat berpartisipasi dalam latihan interaktif yang akan
                        meningkatkan pemahaman Anda.
                    </h3>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 text-sl px-4 rounded-lg hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Temukan Video Course untuk Dipelajari
                    </button>
                </div>
            </section>

            <section className="container-belicepat bg-white mb-12 text-gray-800 relative py-20 px-6">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="container mx-auto judul mb-6">
                        <h2 className="text-2xl font-bold">
                            Koleksi Video Pembelajaran Unggulan
                        </h2>
                        <p className="text-lg mt-4">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami
                        </p>
                    </div>
                    <div className="container mx-auto judul mb-6">
                        <div className="flex flex-wrap gap-8">
                            <h3 className="text-lg text-red-600 ">Semua Kelas</h3>
                            <h3 className="text-lg text-red-600 ">Pemasaran</h3>
                            <h3 className="text-lg text-red-600 ">Design</h3>
                            <h3 className="text-lg text-red-600 ">Pengembangan Diri</h3>
                            <h3 className="text-lg text-red-600 ">Bisnis</h3>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap md:flex-nowrap gap-6 mt-6">
                            {images.slice(0, 3).map((image, index) => (
                                <Card key={index}>
                                    <CardLayouts image={image} />
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap md:flex-nowrap gap-6 mt-6">
                            {images.slice(3, 6).map((image, index) => (
                                <Card key={index}>
                                    <CardLayouts image={image} />
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap md:flex-nowrap gap-6 mt-6">
                            {images.slice(6, 9).map((image, index) => (
                                <Card key={index}>
                                    <CardLayouts image={image} />
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-belicepat bg-white mb-12 text-gray-800 relative py-20 px-6">
                <div className="bg-slate-700 shadow rounded-lg p-6">
                    <div className="container mx-auto judul mb-6">
                        {/* <ProductForm
                        onSubmit={addProduct}
                        initialData={editIndex !== null ? products[editIndex] : null}
                        isEditing={editIndex !== null}
                        resetEdit={resetEdit}
                        /> */}
                    </div>
                </div>
            </section>
            <FooterLayouts />
        </>
    );
};

export default crudR;
