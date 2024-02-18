import React, { useState } from "react";
import mu1 from "../../../../public/assets/Mu/mu1.jpg";
import mu2 from "../../../../public/assets/Mu/mu2.jpg";
import mu3 from "../../../../public/assets/Mu/mu3.jpg";
import mu4 from "../../../../public/assets/Mu/mu4.jpg";
import ModeleOneList from "../ModeleOneList";

const Mu = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".mu1").classList.add("border-2")
        document.querySelector(".mu2").classList.remove("border-2")
        document.querySelector(".mu3").classList.remove("border-2")
        document.querySelector(".mu4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".mu1").classList.remove("border-2")
        document.querySelector(".mu2").classList.add("border-2")
        document.querySelector(".mu3").classList.remove("border-2")
        document.querySelector(".mu4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".mu1").classList.remove("border-2")
        document.querySelector(".mu2").classList.remove("border-2")
        document.querySelector(".mu3").classList.add("border-2")
        document.querySelector(".mu4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".mu1").classList.remove("border-2")
        document.querySelector(".mu2").classList.remove("border-2")
        document.querySelector(".mu3").classList.remove("border-2")
        document.querySelector(".mu4").classList.add("border-2")
    };

    return (
        <div className="container pb-32">
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={mu1}
                            imageTitle="Modèle de CV MU"
                            title="Découvrez le Modèle Mu, un charme discret."
                            details="Le Modèle Mu célèbre la beauté dans la simplicité. Ce CV allie esthétique raffinée et design épuré. Ses touches artistiques efficaces mettent en lumière vos expériences et compétences sans jamais éclipser le contenu."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Ciel"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={mu2}
                            imageTitle="Modèle de CV MU"
                            title="Découvrez le Modèle Mu, un charme discret."
                            details="Le Modèle Mu célèbre la beauté dans la simplicité. Ce CV allie esthétique raffinée et design épuré. Ses touches artistiques efficaces mettent en lumière vos expériences et compétences sans jamais éclipser le contenu."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Terre de Sienne"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={mu3}
                            imageTitle="Modèle de CV MU"
                            title="Découvrez le Modèle Mu, un charme discret."
                            details="Le Modèle Mu célèbre la beauté dans la simplicité. Ce CV allie esthétique raffinée et design épuré. Ses touches artistiques efficaces mettent en lumière vos expériences et compétences sans jamais éclipser le contenu."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Noir"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={mu4}
                            imageTitle="Modèle de CV MU"
                            title="Découvrez le Modèle Mu, un charme discret."
                            details="Le Modèle Mu célèbre la beauté dans la simplicité. Ce CV allie esthétique raffinée et design épuré. Ses touches artistiques efficaces mettent en lumière vos expériences et compétences sans jamais éclipser le contenu."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="mu1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#9dc3e6]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="mu2 border-red-500 w-8 h-8 cursor-pointer  bg-[#ed7d31]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="mu3 border-red-500 w-8 h-8 cursor-pointer  bg-black"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="mu4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-black via-[#ed7d31] to-[#9dc3e6]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Mu;
