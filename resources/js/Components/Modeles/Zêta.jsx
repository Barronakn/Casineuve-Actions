import React, { useState } from 'react';
import zeta1 from "../../../../public/assets/Zêta/zeta1.png";
import zeta2 from "../../../../public/assets/Zêta/zeta2.png";
import zeta3 from "../../../../public/assets/Zêta/zeta3.png";
import zeta4 from "../../../../public/assets/Zêta/zeta4.png";
import ModeleTwoList from '../ModeleTwoList';

const Zêta = () =>  {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".xi1").classList.add("border-2")
        document.querySelector(".xi2").classList.remove("border-2")
        document.querySelector(".xi3").classList.remove("border-2")
        document.querySelector(".xi4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".xi1").classList.remove("border-2")
        document.querySelector(".xi2").classList.add("border-2")
        document.querySelector(".xi3").classList.remove("border-2")
        document.querySelector(".xi4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".xi1").classList.remove("border-2")
        document.querySelector(".xi2").classList.remove("border-2")
        document.querySelector(".xi3").classList.add("border-2")
        document.querySelector(".xi4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".xi1").classList.remove("border-2")
        document.querySelector(".xi2").classList.remove("border-2")
        document.querySelector(".xi3").classList.remove("border-2")
        document.querySelector(".xi4").classList.add("border-2")
    };


    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={zeta1}
                            imageTitle="Modèle de CV ZÊTA"
                            title="Sobriété Senior – Modèle Zêta, élégance et maturité (02 Pages)."
                            details="Spécialement pour les seniors, le Modèle Zêta allie sobriété et élégance. Il met en avant l'expérience avec une disposition stratégique des informations et un design qui respire la maturité."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Bleu"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={zeta2}
                            imageTitle="Modèle de CV ZÊTA"
                            title="Sobriété Senior – Modèle Zêta, élégance et maturité (02 Pages)."
                            details="Spécialement pour les seniors, le Modèle Zêta allie sobriété et élégance. Il met en avant l'expérience avec une disposition stratégique des informations et un design qui respire la maturité."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Gris"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={zeta3}
                            imageTitle="Modèle de CV ZÊTA"
                            title="Sobriété Senior – Modèle Zêta, élégance et maturité (02 Pages)."
                            details="Spécialement pour les seniors, le Modèle Zêta allie sobriété et élégance. Il met en avant l'expérience avec une disposition stratégique des informations et un design qui respire la maturité."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Jaune Vif"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={zeta4}
                            imageTitle="Modèle de CV ZÊTA"
                            title="Sobriété Senior – Modèle Zêta, élégance et maturité (02 Pages)."
                            details="Spécialement pour les seniors, le Modèle Zêta allie sobriété et élégance. Il met en avant l'expérience avec une disposition stratégique des informations et un design qui respire la maturité."
                            price="14,99 €"
                            newPrice="5,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="xi1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="xi2 border-red-500 w-8 h-8 cursor-pointer  bg-[#afabab]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="xi3 border-red-500 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="xi4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#ed7d31] via-[#afabab] to-[#4472c4]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Zêta;
