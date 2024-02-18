import React, { useState } from 'react';
import eta1 from "../../../../public/assets/Eta/eta1.jpg";
import eta2 from "../../../../public/assets/Eta/eta2.jpg";
import eta3 from "../../../../public/assets/Eta/eta3.jpg";
import eta4 from "../../../../public/assets/Eta/eta4.jpg";
import ModeleTwoList from '../ModeleTwoList';

const Eta = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".eta1").classList.add("border-2")
        document.querySelector(".eta2").classList.remove("border-2")
        document.querySelector(".eta3").classList.remove("border-2")
        document.querySelector(".eta4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".eta1").classList.remove("border-2")
        document.querySelector(".eta2").classList.add("border-2")
        document.querySelector(".eta3").classList.remove("border-2")
        document.querySelector(".eta4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".eta1").classList.remove("border-2")
        document.querySelector(".eta2").classList.remove("border-2")
        document.querySelector(".eta3").classList.add("border-2")
        document.querySelector(".eta4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".eta1").classList.remove("border-2")
        document.querySelector(".eta2").classList.remove("border-2")
        document.querySelector(".eta3").classList.remove("border-2")
        document.querySelector(".eta4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={eta1}
                            imageTitle="Modèle de CV ÊTA"
                            title="Dynamique, mais équilibré – Le Modèle Êta, où la modernité se rencontre avec la mesure."
                            details="Le Modèle Êta allie dynamisme et équilibre. Ses éléments graphiques modernes sont agencés avec soin pour créer un effet vivant tout en maintenant une structure claire et une esthétique agréable."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu 1"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={eta2}
                            imageTitle="Modèle de CV ÊTA"
                            title="Dynamique, mais équilibré – Le Modèle Êta, où la modernité se rencontre avec la mesure."
                            details="Le Modèle Êta allie dynamisme et équilibre. Ses éléments graphiques modernes sont agencés avec soin pour créer un effet vivant tout en maintenant une structure claire et une esthétique agréable."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu 2"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={eta3}
                            imageTitle="Modèle de CV ÊTA"
                            title="Dynamique, mais équilibré – Le Modèle Êta, où la modernité se rencontre avec la mesure."
                            details="Le Modèle Êta allie dynamisme et équilibre. Ses éléments graphiques modernes sont agencés avec soin pour créer un effet vivant tout en maintenant une structure claire et une esthétique agréable."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu 3"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={eta4}
                            imageTitle="Modèle de CV ÊTA"
                            title="Dynamique, mais équilibré – Le Modèle Êta, où la modernité se rencontre avec la mesure."
                            details="Le Modèle Êta allie dynamisme et équilibre. Ses éléments graphiques modernes sont agencés avec soin pour créer un effet vivant tout en maintenant une structure claire et une esthétique agréable."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="eta1 border-red-500 border-2 w-8 h-8 cursor-pointer  text-center text-white bg-blue-600"
                    >1</div>
                    <div
                        onClick={handlClick2}
                        className="eta2 border-red-500 w-8 h-8 cursor-pointer  text-center text-white bg-blue-600"
                    >2</div>
                    <div
                        onClick={handlClick3}
                        className="eta3 border-red-500 w-8 h-8 cursor-pointer  text-center text-white bg-blue-600"
                    >3</div>
                    <div
                        onClick={handlClick4}
                        className="eta4 border-red-500 w-8 h-8 cursor-pointer  bg-blue-600"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Eta;
