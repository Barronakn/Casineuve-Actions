import React, { useState } from "react";
import alpha1 from "../../../../public/assets/Alpha/alpha1.jpg";
import alpha2 from "../../../../public/assets/Alpha/alpha2.jpg";
import alpha3 from "../../../../public/assets/Alpha/alpha3.jpg";
import alpha4 from "../../../../public/assets/Alpha/alpha4.jpg";
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
        document.querySelector(".alpha1").classList.add("border-2")
        document.querySelector(".alpha2").classList.remove("border-2")
        document.querySelector(".alpha3").classList.remove("border-2")
        document.querySelector(".alpha4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".alpha1").classList.remove("border-2")
        document.querySelector(".alpha2").classList.add("border-2")
        document.querySelector(".alpha3").classList.remove("border-2")
        document.querySelector(".alpha4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".alpha1").classList.remove("border-2")
        document.querySelector(".alpha2").classList.remove("border-2")
        document.querySelector(".alpha3").classList.add("border-2")
        document.querySelector(".alpha4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".alpha1").classList.remove("border-2")
        document.querySelector(".alpha2").classList.remove("border-2")
        document.querySelector(".alpha3").classList.remove("border-2")
        document.querySelector(".alpha4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10">
                    {visible1 && (
                        <ModeleOneList
                            image={alpha1}
                            imageTitle="Modèle de CV ALPHA"
                            title="Simple, mais jamais ennuyeux – Le Modèle Alpha, le CV qui
                    dit 'je vais droit au but, mais avec style !"
                            details="Le Modèle Alpha brille par sa subtilité. Avec une palette de
                    couleurs choisies avec soin et un design qui équilibre forme
                    et fonction, ce CV est un chef-d'œuvre de modération,
                    parfait pour mettre en valeur vos compétences sans excès."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Sarcelle Moyen"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={alpha2}
                            imageTitle="Modèle de CV ALPHA"
                            title="Simple, mais jamais ennuyeux – Le Modèle Alpha, le CV qui
                    dit 'je vais droit au but, mais avec style !"
                            details="Le Modèle Alpha brille par sa subtilité. Avec une palette de
                    couleurs choisies avec soin et un design qui équilibre forme
                    et fonction, ce CV est un chef-d'œuvre de modération,
                    parfait pour mettre en valeur vos compétences sans excès."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Oe Ancien"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={alpha3}
                            imageTitle="Modèle de CV ALPHA"
                            title="Simple, mais jamais ennuyeux – Le Modèle Alpha, le CV qui
                    dit 'je vais droit au but, mais avec style !"
                            details="Le Modèle Alpha brille par sa subtilité. Avec une palette de
                    couleurs choisies avec soin et un design qui équilibre forme
                    et fonction, ce CV est un chef-d'œuvre de modération,
                    parfait pour mettre en valeur vos compétences sans excès."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Anthracite"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={alpha4}
                            imageTitle="Modèle de CV ALPHA"
                            title="Simple, mais jamais ennuyeux – Le Modèle Alpha, le CV qui
                    dit 'je vais droit au but, mais avec style !"
                            details="Le Modèle Alpha brille par sa subtilité. Avec une palette de
                    couleurs choisies avec soin et un design qui équilibre forme
                    et fonction, ce CV est un chef-d'œuvre de modération,
                    parfait pour mettre en valeur vos compétences sans excès."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 de Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="alpha1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#378171]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="alpha2 border-red-500 w-8 h-8 cursor-pointer  bg-[#bf9000]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="alpha3 border-red-500 w-8 h-8 cursor-pointer  bg-[#595959]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="alpha4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#378171] via-[#bf9000] to-[#595959]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Alpha;
