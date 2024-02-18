import React, { useState } from "react";
import xi1 from "../../../../public/assets/Xi/xi1.jpg";
import xi2 from "../../../../public/assets/Xi/xi2.jpg";
import xi4 from "../../../../public/assets/Xi/xi4.jpg";
import xi5 from "../../../../public/assets/Xi/xi5.jpg";
import xi6 from "../../../../public/assets/Xi/xi6.jpg";
import ModeleOneList from "../ModeleOneList";

const Xi = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible6, setVisible6] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);


    const handlClick1 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(true);
        setVisible6(false);
        setVisible2(false);
        document.querySelector(".x1").classList.add("border-2")
        document.querySelector(".x2").classList.remove("border-2")
        document.querySelector(".x6").classList.remove("border-2")
        document.querySelector(".x4").classList.remove("border-2")
        document.querySelector(".x5").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(false);
        setVisible6(false);
        setVisible2(true);
        document.querySelector(".x1").classList.remove("border-2")
        document.querySelector(".x2").classList.add("border-2")
        document.querySelector(".x6").classList.remove("border-2")
        document.querySelector(".x4").classList.remove("border-2")
        document.querySelector(".x5").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible5(false);
        setVisible4(true);
        setVisible1(false);
        setVisible6(false);
        setVisible2(false);
        document.querySelector(".x1").classList.remove("border-2")
        document.querySelector(".x2").classList.remove("border-2")
        document.querySelector(".x6").classList.remove("border-2")
        document.querySelector(".x4").classList.add("border-2")
        document.querySelector(".x5").classList.remove("border-2")
    };

    const handlClick5 = () => {
        setVisible5(true);
        setVisible4(false);
        setVisible1(false);
        setVisible6(false);
        setVisible2(false);
        document.querySelector(".x1").classList.remove("border-2")
        document.querySelector(".x2").classList.remove("border-2")
        document.querySelector(".x6").classList.remove("border-2")
        document.querySelector(".x4").classList.remove("border-2")
        document.querySelector(".x5").classList.add("border-2")
    };

    const handlClick6 = () => {
        setVisible5(false);
        setVisible4(false);
        setVisible1(false);
        setVisible6(true);
        setVisible2(false);
        document.querySelector(".x1").classList.remove("border-2")
        document.querySelector(".x2").classList.remove("border-2")
        document.querySelector(".x6").classList.add("border-2")
        document.querySelector(".x4").classList.remove("border-2")
        document.querySelector(".x5").classList.remove("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={xi1}
                            imageTitle="Modèle de CV XI"
                            title="Marquez les esprits – avec le Modèle Xi, soyez le candidat qu’on n'oublie pas."
                            details="Le Modèle Xi, c'est un peu comme porter un chapeau extravagant dans une soirée – il assure que personne ne vous oubliera. Idéal pour ceux qui veulent laisser une impression durable (et stylée)."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu de Minuit"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={xi2}
                            imageTitle="Modèle de CV XI"
                            title="Marquez les esprits – avec le Modèle Xi, soyez le candidat qu’on n'oublie pas."
                            details="Le Modèle Xi, c'est un peu comme porter un chapeau extravagant dans une soirée – il assure que personne ne vous oubliera. Idéal pour ceux qui veulent laisser une impression durable (et stylée)."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Violet"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={xi4}
                            imageTitle="Modèle de CV XI"
                            title="Marquez les esprits – avec le Modèle Xi, soyez le candidat qu’on n'oublie pas."
                            details="Le Modèle Xi, c'est un peu comme porter un chapeau extravagant dans une soirée – il assure que personne ne vous oubliera. Idéal pour ceux qui veulent laisser une impression durable (et stylée)."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Vert Turquoise"
                        />
                    )}
                    {visible5 && (
                        <ModeleOneList
                            image={xi5}
                            imageTitle="Modèle de CV XI"
                            title="Marquez les esprits – avec le Modèle Xi, soyez le candidat qu’on n'oublie pas."
                            details="Le Modèle Xi, c'est un peu comme porter un chapeau extravagant dans une soirée – il assure que personne ne vous oubliera. Idéal pour ceux qui veulent laisser une impression durable (et stylée)."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Orange Cuivré"
                        />
                    )}
                    {visible6 && (
                        <ModeleOneList
                            image={xi6}
                            imageTitle="Modèle de CV XI"
                            title="Marquez les esprits – avec le Modèle Xi, soyez le candidat qu’on n'oublie pas."
                            details="Le Modèle Xi, c'est un peu comme porter un chapeau extravagant dans une soirée – il assure que personne ne vous oubliera. Idéal pour ceux qui veulent laisser une impression durable (et stylée)."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="x1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#4472c4]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="x2 border-red-500 w-8 h-8 cursor-pointer  bg-purple-600"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="x4 border-red-500 w-8 h-8 cursor-pointer  bg-[#029676]"
                    ></div>
                    <div
                        onClick={handlClick5}
                        className="x5 border-red-500 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick6}
                        className="x6 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#ed7d31] via-cyan-200 to-[#4472c4]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Xi;
