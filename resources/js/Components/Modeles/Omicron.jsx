import React, { useState } from 'react';
import omicron from "../../../../public/assets/Omicron/omicron.png";
import omicron1 from "../../../../public/assets/Omicron/omicron1.png";
import ModeleTwoList from '../ModeleTwoList';

const Omicron = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".omicron1").classList.add("border-2")
        document.querySelector(".omicron2").classList.remove("border-2")
        document.querySelector(".omicron3").classList.remove("border-2")
        document.querySelector(".omicron4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".omicron1").classList.remove("border-2")
        document.querySelector(".omicron2").classList.add("border-2")
        document.querySelector(".omicron3").classList.remove("border-2")
        document.querySelector(".omicron4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".omicron1").classList.remove("border-2")
        document.querySelector(".omicron2").classList.remove("border-2")
        document.querySelector(".omicron3").classList.add("border-2")
        document.querySelector(".omicron4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".omicron1").classList.remove("border-2")
        document.querySelector(".omicron2").classList.remove("border-2")
        document.querySelector(".omicron3").classList.remove("border-2")
        document.querySelector(".omicron4").classList.add("border-2")
    };


    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={omicron}
                            imageTitle="Modèle de CV OMICRON"
                            title="Débutez avec Distinction – Découvrez les Modèles Omicron, conçus pour les étoiles montantes"
                            details="Les Modèles Omicron sont les alliés idéals des jeunes diplômés ambitieux. Sans photo, ils mettent l'accent sur vos stages, compétences, formations et références. Leurs mises en page claires valorisent vos acquis académiques et votre volonté d'apprendre, tout en offrant un espace dédié aux références qui attestent de votre potentiel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Ciel 1"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={omicron}
                            imageTitle="Modèle de CV OMICRON"
                            title="Débutez avec Distinction – Découvrez les Modèles Omicron, conçus pour les étoiles montantes"
                            details="Les Modèles Omicron sont les alliés idéals des jeunes diplômés ambitieux. Sans photo, ils mettent l'accent sur vos stages, compétences, formations et références. Leurs mises en page claires valorisent vos acquis académiques et votre volonté d'apprendre, tout en offrant un espace dédié aux références qui attestent de votre potentiel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Ciel 2"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={omicron}
                            imageTitle="Modèle de CV OMICRON"
                            title="Débutez avec Distinction – Découvrez les Modèles Omicron, conçus pour les étoiles montantes"
                            details="Les Modèles Omicron sont les alliés idéals des jeunes diplômés ambitieux. Sans photo, ils mettent l'accent sur vos stages, compétences, formations et références. Leurs mises en page claires valorisent vos acquis académiques et votre volonté d'apprendre, tout en offrant un espace dédié aux références qui attestent de votre potentiel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Ciel 3"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={omicron1}
                            imageTitle="Modèle de CV OMICRON"
                            title="Débutez avec Distinction – Découvrez les Modèles Omicron, conçus pour les étoiles montantes"
                            details="Les Modèles Omicron sont les alliés idéals des jeunes diplômés ambitieux. Sans photo, ils mettent l'accent sur vos stages, compétences, formations et références. Leurs mises en page claires valorisent vos acquis académiques et votre volonté d'apprendre, tout en offrant un espace dédié aux références qui attestent de votre potentiel."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="omicron1 border-red-500 border-2 w-8 h-8 cursor-pointer  text-white text-center bg-[#4472c4]"
                    >1</div>
                    <div
                        onClick={handlClick2}
                        className="omicron2 border-red-500 w-8 h-8 cursor-pointer  text-white text-center bg-[#4472c4]"
                    >2</div>
                    <div
                        onClick={handlClick3}
                        className="omicron3 border-red-500 w-8 h-8 cursor-pointer  text-white text-center bg-[#4472c4]"
                    >3</div>
                    <div
                        onClick={handlClick4}
                        className="omicron4 border-red-500 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Omicron;
