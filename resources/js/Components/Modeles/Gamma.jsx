import React, { useState } from "react";
import gamma1 from "../../../../public/assets/Gamma/gamma1.jpg";
import gamma2 from "../../../../public/assets/Gamma/gamma2.jpg";
import gamma3 from "../../../../public/assets/Gamma/gamma3.jpg";
import gamma4 from "../../../../public/assets/Gamma/gamma4.jpg";
import ModeleOneList from "../ModeleOneList";

const Gamma = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".gamma1").classList.add("border-2")
        document.querySelector(".gamma2").classList.remove("border-2")
        document.querySelector(".gamma3").classList.remove("border-2")
        document.querySelector(".gamma4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".gamma1").classList.remove("border-2")
        document.querySelector(".gamma2").classList.add("border-2")
        document.querySelector(".gamma3").classList.remove("border-2")
        document.querySelector(".gamma4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".gamma1").classList.remove("border-2")
        document.querySelector(".gamma2").classList.remove("border-2")
        document.querySelector(".gamma3").classList.add("border-2")
        document.querySelector(".gamma4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".gamma1").classList.remove("border-2")
        document.querySelector(".gamma2").classList.remove("border-2")
        document.querySelector(".gamma3").classList.remove("border-2")
        document.querySelector(".gamma4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10">
                    {visible1 && (
                        <ModeleOneList
                            image={gamma1}
                            imageTitle="Modèle de CV GAMMA"
                            title="Clarté et concision – Le Modèle Gamma, le minimalisme au service de votre parcours."
                            details="Dans le Modèle Gamma, chaque élément est réfléchi pour créer un impact maximal avec minimalisme. Les couleurs sont utilisées avec parcimonie, et la disposition de l'information est pensée pour une lisibilité optimale, reflétant votre professionnalisme."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Noir"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={gamma2}
                            imageTitle="Modèle de CV GAMMA"
                            title="Clarté et concision – Le Modèle Gamma, le minimalisme au service de votre parcours."
                            details="Dans le Modèle Gamma, chaque élément est réfléchi pour créer un impact maximal avec minimalisme. Les couleurs sont utilisées avec parcimonie, et la disposition de l'information est pensée pour une lisibilité optimale, reflétant votre professionnalisme."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="chocolat"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={gamma3}
                            imageTitle="Modèle de CV GAMMA"
                            title="Clarté et concision – Le Modèle Gamma, le minimalisme au service de votre parcours."
                            details="Dans le Modèle Gamma, chaque élément est réfléchi pour créer un impact maximal avec minimalisme. Les couleurs sont utilisées avec parcimonie, et la disposition de l'information est pensée pour une lisibilité optimale, reflétant votre professionnalisme."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={gamma4}
                            imageTitle="Modèle de CV GAMMA"
                            title="Clarté et concision – Le Modèle Gamma, le minimalisme au service de votre parcours."
                            details="Dans le Modèle Gamma, chaque élément est réfléchi pour créer un impact maximal avec minimalisme. Les couleurs sont utilisées avec parcimonie, et la disposition de l'information est pensée pour une lisibilité optimale, reflétant votre professionnalisme."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="gamma1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-black"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="gamma2 border-red-500 w-8 h-8 cursor-pointer  bg-[#933014]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="gamma3 border-red-500 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="gamma4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-black via-[#4472c4] to-[#933014]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Gamma;
