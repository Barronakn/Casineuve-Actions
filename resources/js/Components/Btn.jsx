import React from "react";

const Btn = ({ totalPrice }) => {
    FedaPay.init('#pay-btn', { public_key: 'pk_live_1NAzZcE8KQi-9lFi66rm_VhS' });

    return (
        <div>
            <button
                id="pay-btn"
                data-transaction-amount={totalPrice}
                data-transaction-description="Télécharger un CV"
                data-currency-iso="EUR"
                className="pay-btn bg-black text-white font-semibold rounded-lg px-4 py-2"
            >
                Télécharger
            </button>
        </div>
    );
};

export default Btn;
