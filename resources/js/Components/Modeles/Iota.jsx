import React, { useState } from 'react';
import iota1 from "../../../../public/assets/Iota/iota1.jpg";
import iota2 from "../../../../public/assets/Iota/iota2.jpg";
import iota3 from "../../../../public/assets/Iota/iota3.jpg";
import iota4 from "../../../../public/assets/Iota/iota4.jpg";
import ModeleTwoList from '../ModeleTwoList';

const Iota = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".iota1").classList.add("border-2")
        document.querySelector(".iota2").classList.remove("border-2")
        document.querySelector(".iota3").classList.remove("border-2")
        document.querySelector(".iota4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".iota1").classList.remove("border-2")
        document.querySelector(".iota2").classList.add("border-2")
        document.querySelector(".iota3").classList.remove("border-2")
        document.querySelector(".iota4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".iota1").classList.remove("border-2")
        document.querySelector(".iota2").classList.remove("border-2")
        document.querySelector(".iota3").classList.add("border-2")
        document.querySelector(".iota4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".iota1").classList.remove("border-2")
        document.querySelector(".iota2").classList.remove("border-2")
        document.querySelector(".iota3").classList.remove("border-2")
        document.querySelector(".iota4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={iota1}
                            imageTitle="Modèle de CV IOTA"
                            title="Créativité mesurée – Le Modèle Iota, l'équilibre entre innovation et professionnalisme."
                            details="Le Modèle Iota est idéal pour ceux qui veulent se démarquer. Il utilise une créativité contrôlée, avec des éléments graphiques subtils et un agencement des informations qui maintient un aspect professionnel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Noir"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={iota2}
                            imageTitle="Modèle de CV IOTA"
                            title="Créativité mesurée – Le Modèle Iota, l'équilibre entre innovation et professionnalisme."
                            details="Le Modèle Iota est idéal pour ceux qui veulent se démarquer. Il utilise une créativité contrôlée, avec des éléments graphiques subtils et un agencement des informations qui maintient un aspect professionnel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu marine"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={iota3}
                            imageTitle="Modèle de CV IOTA"
                            title="Créativité mesurée – Le Modèle Iota, l'équilibre entre innovation et professionnalisme."
                            details="Le Modèle Iota est idéal pour ceux qui veulent se démarquer. Il utilise une créativité contrôlée, avec des éléments graphiques subtils et un agencement des informations qui maintient un aspect professionnel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Sienne Brûlée"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={iota4}
                            imageTitle="Modèle de CV IOTA"
                            title="Créativité mesurée – Le Modèle Iota, l'équilibre entre innovation et professionnalisme."
                            details="Le Modèle Iota est idéal pour ceux qui veulent se démarquer. Il utilise une créativité contrôlée, avec des éléments graphiques subtils et un agencement des informations qui maintient un aspect professionnel."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="iota1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-black"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="iota2 border-red-500 w-8 h-8 cursor-pointer  bg-[#1f4e79]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="iota3 border-red-500 w-8 h-8 cursor-pointer  bg-[#c55a11]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="iota4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#c55a11] via-[#1f4e79] to-black"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Iota;
