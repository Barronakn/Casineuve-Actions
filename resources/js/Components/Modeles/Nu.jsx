import React, { useState } from "react";
import nu1 from "../../../../public/assets/Nu/nu1.jpg";
import nu2 from "../../../../public/assets/Nu/nu2.jpg";
import nu3 from "../../../../public/assets/Nu/nu3.jpg";
import nu4 from "../../../../public/assets/Nu/nu4.jpg";
import nu5 from "../../../../public/assets/Nu/nu5.jpg";
import ModeleTwoList from "../ModeleTwoList";

const Nu = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);


    const handlClick1 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(true);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".nu1").classList.add("border-2")
        document.querySelector(".nu2").classList.remove("border-2")
        document.querySelector(".nu3").classList.remove("border-2")
        document.querySelector(".nu4").classList.remove("border-2")
        document.querySelector(".nu5").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(false);
        setVisible3(false);
        setVisible2(true);
        document.querySelector(".nu1").classList.remove("border-2")
        document.querySelector(".nu2").classList.add("border-2")
        document.querySelector(".nu3").classList.remove("border-2")
        document.querySelector(".nu4").classList.remove("border-2")
        document.querySelector(".nu5").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(false);
        setVisible3(true);
        setVisible2(false);
        document.querySelector(".nu1").classList.remove("border-2")
        document.querySelector(".nu2").classList.remove("border-2")
        document.querySelector(".nu3").classList.add("border-2")
        document.querySelector(".nu4").classList.remove("border-2")
        document.querySelector(".nu5").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible5(false);
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".nu1").classList.remove("border-2")
        document.querySelector(".nu2").classList.remove("border-2")
        document.querySelector(".nu3").classList.remove("border-2")
        document.querySelector(".nu4").classList.add("border-2")
        document.querySelector(".nu5").classList.remove("border-2")
    };

    const handlClick5 = () => {
        setVisible5(true);
        setVisible4(false);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".nu1").classList.remove("border-2")
        document.querySelector(".nu2").classList.remove("border-2")
        document.querySelector(".nu3").classList.remove("border-2")
        document.querySelector(".nu4").classList.remove("border-2")
        document.querySelector(".nu5").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={nu1}
                            imageTitle="Modèle de CV NU"
                            title="Simplicité sophistiquée – Modèle Nu, la finesse dans chaque détail."
                            details="Nu, est synonyme de sophistication. Avec un design minimaliste et une utilisation stratégique des couleurs, il offre un cadre élégant pour présenter vos compétences et expériences."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Black"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={nu2}
                            imageTitle="Modèle de CV NU"
                            title="Simplicité sophistiquée – Modèle Nu, la finesse dans chaque détail."
                            details="Nu, est synonyme de sophistication. Avec un design minimaliste et une utilisation stratégique des couleurs, il offre un cadre élégant pour présenter vos compétences et expériences."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Océan"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={nu3}
                            imageTitle="Modèle de CV NU"
                            title="Simplicité sophistiquée – Modèle Nu, la finesse dans chaque détail."
                            details="Nu, est synonyme de sophistication. Avec un design minimaliste et une utilisation stratégique des couleurs, il offre un cadre élégant pour présenter vos compétences et expériences."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Vert Turquoise"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={nu4}
                            imageTitle="Modèle de CV NU"
                            title="Simplicité sophistiquée – Modèle Nu, la finesse dans chaque détail."
                            details="Nu, est synonyme de sophistication. Avec un design minimaliste et une utilisation stratégique des couleurs, il offre un cadre élégant pour présenter vos compétences et expériences."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Maganta"
                        />
                    )}
                    {visible5 && (
                        <ModeleTwoList
                            image={nu5}
                            imageTitle="Modèle de CV NU"
                            title="Simplicité sophistiquée – Modèle Nu, la finesse dans chaque détail."
                            details="Nu, est synonyme de sophistication. Avec un design minimaliste et une utilisation stratégique des couleurs, il offre un cadre élégant pour présenter vos compétences et expériences."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="nu1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-black"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="nu2 border-red-500 w-8 h-8 cursor-pointer  bg-[#3494ba]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="nu3 border-red-500 w-8 h-8 cursor-pointer  bg-[#029676]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="nu4 border-red-500 w-8 h-8 cursor-pointer  bg-[#e430bd]"
                    ></div>
                    <div
                        onClick={handlClick5}
                        className="nu5 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#e430bd] via-[#029676] to-[#3494ba]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Nu;
