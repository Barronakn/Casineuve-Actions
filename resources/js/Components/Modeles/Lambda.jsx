import React, { useState } from "react";
import lambda1 from "../../../../public/assets/Lambda/lambda1.jpg";
import lambda2 from "../../../../public/assets/Lambda/lambda2.jpg";
import lambda3 from "../../../../public/assets/Lambda/lambda3.jpg";
import lambda4 from "../../../../public/assets/Lambda/lambda4.jpg";
import ModeleTwoList from "../ModeleTwoList";

const Lambda = () =>  {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".lambda1").classList.add("border-2")
        document.querySelector(".lambda2").classList.remove("border-2")
        document.querySelector(".lambda3").classList.remove("border-2")
        document.querySelector(".lambda4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".lambda1").classList.remove("border-2")
        document.querySelector(".lambda2").classList.add("border-2")
        document.querySelector(".lambda3").classList.remove("border-2")
        document.querySelector(".lambda4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".lambda1").classList.remove("border-2")
        document.querySelector(".lambda2").classList.remove("border-2")
        document.querySelector(".lambda3").classList.add("border-2")
        document.querySelector(".lambda4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".lambda1").classList.remove("border-2")
        document.querySelector(".lambda2").classList.remove("border-2")
        document.querySelector(".lambda3").classList.remove("border-2")
        document.querySelector(".lambda4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={lambda1}
                            imageTitle="Modèle de CV LAMBDA"
                            title="Polyvalence élégante – Modèle Lambda, adaptabilité et style."
                            details="Le Modèle Lambda s'adapte à divers parcours professionnels. Il combine élégance et flexibilité, avec un design qui s'accorde aussi bien aux jeunes professionnels qu'aux seniors."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Orange Cuivrée"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={lambda2}
                            imageTitle="Modèle de CV LAMBDA"
                            title="Polyvalence élégante – Modèle Lambda, adaptabilité et style."
                            details="Le Modèle Lambda s'adapte à divers parcours professionnels. Il combine élégance et flexibilité, avec un design qui s'accorde aussi bien aux jeunes professionnels qu'aux seniors."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Mangata"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={lambda3}
                            imageTitle="Modèle de CV LAMBDA"
                            title="Polyvalence élégante – Modèle Lambda, adaptabilité et style."
                            details="Le Modèle Lambda s'adapte à divers parcours professionnels. Il combine élégance et flexibilité, avec un design qui s'accorde aussi bien aux jeunes professionnels qu'aux seniors."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Ciel"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={lambda4}
                            imageTitle="Modèle de CV LAMBDA"
                            title="Polyvalence élégante – Modèle Lambda, adaptabilité et style."
                            details="Le Modèle Lambda s'adapte à divers parcours professionnels. Il combine élégance et flexibilité, avec un design qui s'accorde aussi bien aux jeunes professionnels qu'aux seniors."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="lambda1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="lambda2 border-red-500 w-8 h-8 cursor-pointer  bg-[#e430bd]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="lambda3 border-red-500 w-8 h-8 cursor-pointer  bg-[#9dc3e6]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="lambda4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#9dc3e6] via-[#e430bd] to-[#ed7d31]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Lambda;
