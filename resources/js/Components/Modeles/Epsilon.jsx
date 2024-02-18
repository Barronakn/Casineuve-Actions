import React, { useState } from 'react';
import epsilon1 from "../../../../public/assets/Epsilon/epsilon1.jpg";
import epsilon2 from "../../../../public/assets/Epsilon/epsilon2.jpg";
import epsilon3 from "../../../../public/assets/Epsilon/epsilon3.jpg";
import epsilon4 from "../../../../public/assets/Epsilon/epsilon4.png";
import ModeleOneList from "../ModeleOneList";

const Epsilon = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".epsilon1").classList.add("border-2")
        document.querySelector(".epsilon2").classList.remove("border-2")
        document.querySelector(".epsilon3").classList.remove("border-2")
        document.querySelector(".epsilon4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".epsilon1").classList.remove("border-2")
        document.querySelector(".epsilon2").classList.add("border-2")
        document.querySelector(".epsilon3").classList.remove("border-2")
        document.querySelector(".epsilon4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".epsilon1").classList.remove("border-2")
        document.querySelector(".epsilon2").classList.remove("border-2")
        document.querySelector(".epsilon3").classList.add("border-2")
        document.querySelector(".epsilon4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".epsilon1").classList.remove("border-2")
        document.querySelector(".epsilon2").classList.remove("border-2")
        document.querySelector(".epsilon3").classList.remove("border-2")
        document.querySelector(".epsilon4").classList.add("border-2")
    };


    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={epsilon1}
                            imageTitle="Modèle de CV EPSILON"
                            title="Maturité et prestige – Modèle Epsilon, l'excellence pour les seniors (02 Pages)."
                            details="Le Modèle Epsilon est spécialement conçu pour les professionnels expérimentés. Il allie prestige et clarté, offrant un espace idéal pour mettre en avant une carrière accomplie."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Bleu"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={epsilon2}
                            imageTitle="Modèle de CV EPSILON"
                            title="Maturité et prestige – Modèle Epsilon, l'excellence pour les seniors (02 Pages)."
                            details="Le Modèle Epsilon est spécialement conçu pour les professionnels expérimentés. Il allie prestige et clarté, offrant un espace idéal pour mettre en avant une carrière accomplie."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Gris"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={epsilon3}
                            imageTitle="Modèle de CV EPSILON"
                            title="Maturité et prestige – Modèle Epsilon, l'excellence pour les seniors (02 Pages)."
                            details="Le Modèle Epsilon est spécialement conçu pour les professionnels expérimentés. Il allie prestige et clarté, offrant un espace idéal pour mettre en avant une carrière accomplie."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Jaune Vif"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={epsilon4}
                            imageTitle="Modèle de CV EPSILON"
                            title="Maturité et prestige – Modèle Epsilon, l'excellence pour les seniors (02 Pages)."
                            details="Le Modèle Epsilon est spécialement conçu pour les professionnels expérimentés. Il allie prestige et clarté, offrant un espace idéal pour mettre en avant une carrière accomplie."
                            price="14,99 €"
                            newPrice="5,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="epsilon1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="epsilon2 border-red-500 w-8 h-8 cursor-pointer  bg-[#afabab]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="epsilon3 border-red-500 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="epsilon4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#ed7d31] via-[#afabab] to-[#4472c4]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Epsilon;
