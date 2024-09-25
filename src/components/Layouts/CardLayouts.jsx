const CardLayouts = ({ image }) => {
    return (
        <>
            <img
                className="h-48 w-full object-cover rounded-lg mb-4"
                src={image}
                alt="Card Image"
            />
            <h2 className="text-xl font-semibold mb-2">
                <b>Big 4 Auditor Financial Analysis</b>
            </h2>
            <h4 className="text-gray-600 mb-4">
                Mulai transformasi dengan instruktur profesional, harga terjangkau dan
                proses transaksi cepat
            </h4>
            <div className="flex items-center gap-4 mb-4">
                <img
                    className="h-14 w-14 rounded-lg"
                    src="/JenaOrtega.png"
                    alt="Jena Ortega"
                />
                <div>
                    <h3 className="text-xl font-semibold">
                        <b>Jena Ortega</b>
                    </h3>
                    <h4 className="text-gray-600">Senior Akuntan di Gojek.</h4>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <img
                    src="/Rating.png"
                    alt="Rating"
                    className="h-auto w-auto rounded-lg"
                />
                <div className="text-xl font-semibold text-green-600 ml-auto">
                    <p className="text-right">Rp300K</p>
                </div>
            </div>
        </>
    );
};

export default CardLayouts;
