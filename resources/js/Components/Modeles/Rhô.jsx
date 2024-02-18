import React, { useState } from 'react';
import rho1 from "../../../../public/assets/Rhô/rho1.png";
import rho2 from "../../../../public/assets/Rhô/rho2.png";
import rho3 from "../../../../public/assets/Rhô/rho3.png";
import rho4 from "../../../../public/assets/Rhô/rho4.png";
import ModeleOneList from "../ModeleOneList";

const Rhô = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".rho1").classList.add("border-2")
        document.querySelector(".rho2").classList.remove("border-2")
        document.querySelector(".rho3").classList.remove("border-2")
        document.querySelector(".rho4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".rho1").classList.remove("border-2")
        document.querySelector(".rho2").classList.add("border-2")
        document.querySelector(".rho3").classList.remove("border-2")
        document.querySelector(".rho4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".rho1").classList.remove("border-2")
        document.querySelector(".rho2").classList.remove("border-2")
        document.querySelector(".rho3").classList.add("border-2")
        document.querySelector(".rho4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".rho1").classList.remove("border-2")
        document.querySelector(".rho2").classList.remove("border-2")
        document.querySelector(".rho3").classList.remove("border-2")
        document.querySelector(".rho4").classList.add("border-2")
    };


    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={rho1}
                            imageTitle="Modèle de CV RHÔ"
                            title="Focus sur l'essentiel – Modèle Rhô, éloquence sans photo (02 Pages)."
                            details="Le Modèle Rhô, sans photo, dirige l'attention sur ce qui compte : vos compétences. Il utilise un design épuré et une disposition claire pour une communication efficace et professionnelle."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Bleu"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={rho2}
                            imageTitle="Modèle de CV RHÔ"
                            title="Focus sur l'essentiel – Modèle Rhô, éloquence sans photo (02 Pages)."
                            details="Le Modèle Rhô, sans photo, dirige l'attention sur ce qui compte : vos compétences. Il utilise un design épuré et une disposition claire pour une communication efficace et professionnelle."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Gris"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={rho3}
                            imageTitle="Modèle de CV RHÔ"
                            title="Focus sur l'essentiel – Modèle Rhô, éloquence sans photo (02 Pages)."
                            details="Le Modèle Rhô, sans photo, dirige l'attention sur ce qui compte : vos compétences. Il utilise un design épuré et une disposition claire pour une communication efficace et professionnelle."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Jaune Vif"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={rho4}
                            imageTitle="Modèle de CV RHÔ"
                            title="Focus sur l'essentiel – Modèle Rhô, éloquence sans photo (02 Pages)."
                            details="Le Modèle Rhô, sans photo, dirige l'attention sur ce qui compte : vos compétences. Il utilise un design épuré et une disposition claire pour une communication efficace et professionnelle."
                            price="14,99 €"
                            newPrice="5,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                <div
                        onClick={handlClick1}
                        className="rho1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="rho2 border-red-500 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="rho3 border-red-500 w-8 h-8 cursor-pointer  bg-[#afabab]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="rho4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#ed7d31] via-[#afabab] to-[#4472c4]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Rhô;
