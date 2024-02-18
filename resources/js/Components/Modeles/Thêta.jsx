import React, { useState } from "react";
import thêta1 from "../../../../public/assets/Thêta/thêta1.jpg";
import thêta2 from "../../../../public/assets/Thêta/thêta2.jpg";
import thêta3 from "../../../../public/assets/Thêta/thêta3.jpg";
import thêta4 from "../../../../public/assets/Thêta/thêta4.jpg";
import ModeleOneList from "../ModeleOneList";

const Alpha = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".theta1").classList.add("border-2")
        document.querySelector(".theta2").classList.remove("border-2")
        document.querySelector(".theta3").classList.remove("border-2")
        document.querySelector(".theta4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".theta1").classList.remove("border-2")
        document.querySelector(".theta2").classList.add("border-2")
        document.querySelector(".theta3").classList.remove("border-2")
        document.querySelector(".theta4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".theta1").classList.remove("border-2")
        document.querySelector(".theta2").classList.remove("border-2")
        document.querySelector(".theta3").classList.add("border-2")
        document.querySelector(".theta4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".theta1").classList.remove("border-2")
        document.querySelector(".theta2").classList.remove("border-2")
        document.querySelector(".theta3").classList.remove("border-2")
        document.querySelector(".theta4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={thêta1}
                            imageTitle="Modèle de CV THÊTA"
                            title="Quand chaque élément compte – Modèle Thêta, l'excellence dans la modération"
                            details="Le Modèle Thêta est un exemple parfait d'utilisation mesurée de design innovant. Chaque couleur, forme et mot est placé avec intention, créant un CV qui est à la fois visuellement attirant et impeccablement organisé"
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu de minuit"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={thêta2}
                            imageTitle="Modèle de CV THÊTA"
                            title="Quand chaque élément compte – Modèle Thêta, l'excellence dans la modération"
                            details="Le Modèle Thêta est un exemple parfait d'utilisation mesurée de design innovant. Chaque couleur, forme et mot est placé avec intention, créant un CV qui est à la fois visuellement attirant et impeccablement organisé"
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Vert d'eau"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={thêta3}
                            imageTitle="Modèle de CV THÊTA"
                            title="Quand chaque élément compte – Modèle Thêta, l'excellence dans la modération"
                            details="Le Modèle Thêta est un exemple parfait d'utilisation mesurée de design innovant. Chaque couleur, forme et mot est placé avec intention, créant un CV qui est à la fois visuellement attirant et impeccablement organisé"
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Jaune de cuivré"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={thêta4}
                            imageTitle="Modèle de CV THÊTA"
                            title="Quand chaque élément compte – Modèle Thêta, l'excellence dans la modération"
                            details="Le Modèle Thêta est un exemple parfait d'utilisation mesurée de design innovant. Chaque couleur, forme et mot est placé avec intention, créant un CV qui est à la fois visuellement attirant et impeccablement organisé"
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="theta1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#3494ba]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="theta2 border-red-500 w-8 h-8 cursor-pointer  bg-[#58bca2]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="theta3 border-red-500 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="theta4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#3494ba] via-[#58bca2] to-[#ed7d31]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Alpha;
