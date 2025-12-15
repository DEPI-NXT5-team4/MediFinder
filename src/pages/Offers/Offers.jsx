// src/pages/Offers.jsx
import React, { useState, useEffect } from 'react';

const Offers = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading offers...</p>;
    }

    if (!data || !data.offers || data.offers.length === 0) {
        return <p className="text-center mt-10">No offers available.</p>;
    }

    const today = new Date();
    const activeOffers = data.offers.filter(offer => new Date(offer.validUntil) >= today);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-xl font-bold mb-6">Current Offers</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeOffers.map(offer => {
                    const medicine = data.medicines.find(m => m.id === offer.medicineId);

                    return (
                        <div
                            key={offer.id}
                            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={offer.image || medicine?.image}
                                alt={offer.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold ">{offer.title}</h2>
                                <p className="text-gray-600 mt-2">{offer.description}</p>

                                {medicine && (
                                    <>
                                        <p className="mt-2 text-gray-800 font-medium">
                                            Original Price: ${medicine.price.toFixed(2)}
                                        </p>
                                        {offer.discount && (
                                            <p className="mt-1 text-red-500 font-bold">
                                                Discounted Price: $
                                                {(medicine.price * (1 - offer.discount / 100)).toFixed(2)}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Offers;
