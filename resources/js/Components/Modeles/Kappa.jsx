import React, { useState } from 'react';
import kappa1 from "../../../../public/assets/Kappa/kappa1.jpg";
import kappa2 from "../../../../public/assets/Kappa/kappa2.jpg";
import kappa3 from "../../../../public/assets/Kappa/kappa3.jpg";
import kappa4 from "../../../../public/assets/Kappa/kappa4.jpg";
import ModeleOneList from "../ModeleOneList";

const Kappa = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".kappa1").classList.add("border-2")
        document.querySelector(".kappa2").classList.remove("border-2")
        document.querySelector(".kappa3").classList.remove("border-2")
        document.querySelector(".kappa4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".kappa1").classList.remove("border-2")
        document.querySelector(".kappa2").classList.add("border-2")
        document.querySelector(".kappa3").classList.remove("border-2")
        document.querySelector(".kappa4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".kappa1").classList.remove("border-2")
        document.querySelector(".kappa2").classList.remove("border-2")
        document.querySelector(".kappa3").classList.add("border-2")
        document.querySelector(".kappa4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".kappa1").classList.remove("border-2")
        document.querySelector(".kappa2").classList.remove("border-2")
        document.querySelector(".kappa3").classList.remove("border-2")
        document.querySelector(".kappa4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={kappa1}
                            imageTitle="Modèle de CV KAPPA"
                            title="Design audacieux – Modèle Kappa, l'impact visuel maîtrisé."
                            details="Modèle Kappa combine audace et professionnalisme. Son design unique et ses couleurs mesurées créent un effet visuel fort, tout en gardant une clarté exemplaire."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Jaune Pâle"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={kappa2}
                            imageTitle="Modèle de CV KAPPA"
                            title="Design audacieux – Modèle Kappa, l'impact visuel maîtrisé."
                            details="Modèle Kappa combine audace et professionnalisme. Son design unique et ses couleurs mesurées créent un effet visuel fort, tout en gardant une clarté exemplaire."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Nuance de Pêche"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={kappa3}
                            imageTitle="Modèle de CV KAPPA"
                            title="Design audacieux – Modèle Kappa, l'impact visuel maîtrisé."
                            details="Modèle Kappa combine audace et professionnalisme. Son design unique et ses couleurs mesurées créent un effet visuel fort, tout en gardant une clarté exemplaire."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu ciel"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={kappa4}
                            imageTitle="Modèle de CV KAPPA"
                            title="Design audacieux – Modèle Kappa, l'impact visuel maîtrisé."
                            details="Modèle Kappa combine audace et professionnalisme. Son design unique et ses couleurs mesurées créent un effet visuel fort, tout en gardant une clarté exemplaire."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="kappa1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#ffe699]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="kappa2 border-red-500 w-8 h-8 cursor-pointer  bg-[#f8cbad]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="kappa3 border-red-500 w-8 h-8 cursor-pointer  bg-[#9dc3e6]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="kappa4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#9dc3e6] via-[#f8cbad] to-[#ffe699]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Kappa;
