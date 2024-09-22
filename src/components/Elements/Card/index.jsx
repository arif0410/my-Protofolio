
const Card = (props) => {
    const { children } = props;
    return (
            <div>
                <div class="w-full md:w-1/3 px-4 mb-8">
                    <div class="bg-white shadow rounded-lg p-6">
                        <div class="text-blue-600 mb-4">
                            <img src="{../public/gummy.png}" alt="gambas" />
                        </div>
                        <h3 class="text-xl font-semibold mb-4">Point of Sales</h3>
                        <p class="text-gray-600">Aplikasi Point of Sales merupakan perangkat lunak yang digunakan untuk memproses transaksi penjualan, mengelola inventaris, dan menghasilkan laporan keuangan.</p>
                        <p class="text-gray-600 text-xl font-bold"><a href="https://github.com/arif0410/gummy-pos.git">Link Git </a></p>
                    </div>
                </div>
            </div>
    );
};
export default Card;