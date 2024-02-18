import React, { useState } from 'react';
import pi1 from "../../../../public/assets/Pi/pi1.jpg";
import pi2 from "../../../../public/assets/Pi/pi2.jpg";
import pi3 from "../../../../public/assets/Pi/pi3.jpg";
import pi4 from "../../../../public/assets/Pi/pi4.png";
import ModeleOneList from '../ModeleOneList';

const Pi = () =>  {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".pi1").classList.add("border-2")
        document.querySelector(".pi2").classList.remove("border-2")
        document.querySelector(".pi3").classList.remove("border-2")
        document.querySelector(".pi4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".pi1").classList.remove("border-2")
        document.querySelector(".pi2").classList.add("border-2")
        document.querySelector(".pi3").classList.remove("border-2")
        document.querySelector(".pi4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".pi1").classList.remove("border-2")
        document.querySelector(".pi2").classList.remove("border-2")
        document.querySelector(".pi3").classList.add("border-2")
        document.querySelector(".pi4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".pi1").classList.remove("border-2")
        document.querySelector(".pi2").classList.remove("border-2")
        document.querySelector(".pi3").classList.remove("border-2")
        document.querySelector(".pi4").classList.add("border-2")
    };


    return (
        <div className='container my-32'>
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleOneList
                            image={pi1}
                            imageTitle="Modèle de CV PI"
                            title="Professionnalisme sans photo – Modèle Pi, la discrétion au premier plan."
                            details="Conçu pour ceux qui préfèrent un CV sans photo, le Modèle Pi se concentre sur le contenu. Il offre une présentation claire et professionnelle, mettant en avant compétences et expériences sans distraction visuelle."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Turquoise clair"
                        />
                    )}
                    {visible2 && (
                        <ModeleOneList
                            image={pi2}
                            imageTitle="Modèle de CV PI"
                            title="Professionnalisme sans photo – Modèle Pi, la discrétion au premier plan."
                            details="Conçu pour ceux qui préfèrent un CV sans photo, le Modèle Pi se concentre sur le contenu. Il offre une présentation claire et professionnelle, mettant en avant compétences et expériences sans distraction visuelle."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu Pastel"
                        />
                    )}
                    {visible3 && (
                        <ModeleOneList
                            image={pi3}
                            imageTitle="Modèle de CV PI"
                            title="Professionnalisme sans photo – Modèle Pi, la discrétion au premier plan."
                            details="Conçu pour ceux qui préfèrent un CV sans photo, le Modèle Pi se concentre sur le contenu. Il offre une présentation claire et professionnelle, mettant en avant compétences et expériences sans distraction visuelle."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Terre de Sienne"
                        />
                    )}
                    {visible4 && (
                        <ModeleOneList
                            image={pi4}
                            imageTitle="Modèle de CV PI"
                            title="Professionnalisme sans photo – Modèle Pi, la discrétion au premier plan."
                            details="Conçu pour ceux qui préfèrent un CV sans photo, le Modèle Pi se concentre sur le contenu. Il offre une présentation claire et professionnelle, mettant en avant compétences et expériences sans distraction visuelle."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Terre de Sienne"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-start">
                    <div
                        onClick={handlClick1}
                        className="pi1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#89f3f0]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="pi2 border-red-500 w-8 h-8 cursor-pointer  bg-[#8faadc]"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="pi3 border-red-500 w-8 h-8 cursor-pointer  bg-[#cf5f13]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="pi4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#cf5f13] via-[#8faadc] to-[#89f3f0]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Pi;
