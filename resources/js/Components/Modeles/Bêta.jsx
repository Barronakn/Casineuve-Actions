import React, { useState } from 'react';
import beta1 from "../../../../public/assets/Bêta/beta1.jpg";
import beta2 from "../../../../public/assets/Bêta/beta2.jpg";
import beta3 from "../../../../public/assets/Bêta/beta3.jpg";
import beta4 from "../../../../public/assets/Bêta/beta4.png";
import ModeleTwoList from '../ModeleTwoList';

const Bêta = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".beta1").classList.add("border-2")
        document.querySelector(".beta2").classList.remove("border-2")
        document.querySelector(".beta3").classList.remove("border-2")
        document.querySelector(".beta4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".beta1").classList.remove("border-2")
        document.querySelector(".beta2").classList.add("border-2")
        document.querySelector(".beta3").classList.remove("border-2")
        document.querySelector(".beta4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".beta1").classList.remove("border-2")
        document.querySelector(".beta2").classList.remove("border-2")
        document.querySelector(".beta3").classList.add("border-2")
        document.querySelector(".beta4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".beta1").classList.remove("border-2")
        document.querySelector(".beta2").classList.remove("border-2")
        document.querySelector(".beta3").classList.remove("border-2")
        document.querySelector(".beta4").classList.add("border-2")
    };


    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={beta1}
                            imageTitle="Modèle de CV BÊTA"
                            title="Élégance Senior – Le Modèle Bêta, raffinement et expérience (02 Pages)."
                            details="Le Modèle Bêta est conçu pour valoriser les parcours longs et riches. Avec une harmonie de couleurs et une mise en page pensée pour l'expérience, il offre un écrin parfait pour les professionnels seniors."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Bleu"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={beta2}
                            imageTitle="Modèle de CV BÊTA"
                            title="Élégance Senior – Le Modèle Bêta, raffinement et expérience (02 Pages)."
                            details="Le Modèle Bêta est conçu pour valoriser les parcours longs et riches. Avec une harmonie de couleurs et une mise en page pensée pour l'expérience, il offre un écrin parfait pour les professionnels seniors."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Gris"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={beta3}
                            imageTitle="Modèle de CV BÊTA"
                            title="Élégance Senior – Le Modèle Bêta, raffinement et expérience (02 Pages)."
                            details="Le Modèle Bêta est conçu pour valoriser les parcours longs et riches. Avec une harmonie de couleurs et une mise en page pensée pour l'expérience, il offre un écrin parfait pour les professionnels seniors."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Vert"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={beta4}
                            imageTitle="Modèle de CV BÊTA"
                            title="Élégance Senior – Le Modèle Bêta, raffinement et expérience (02 Pages)."
                            details="Le Modèle Bêta est conçu pour valoriser les parcours longs et riches. Avec une harmonie de couleurs et une mise en page pensée pour l'expérience, il offre un écrin parfait pour les professionnels seniors."
                            price="14,99 €"
                            newPrice="5,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="beta1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#5b9bd5]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="beta2 border-red-500 w-8 h-8 cursor-pointer  bg-[#d0cece]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="beta3 border-red-500 w-8 h-8 cursor-pointer  bg-[#70ad47]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="beta4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#70ad47] via-[#d0cece] to-[#5b9bd5]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Bêta;
