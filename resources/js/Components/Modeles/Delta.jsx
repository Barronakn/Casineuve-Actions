import React, { useState } from 'react';
import delta1 from "../../../../public/assets/Delta/delta1.jpg";
import delta2 from "../../../../public/assets/Delta/delta2.jpg";
import delta3 from "../../../../public/assets/Delta/delta3.jpg";
import delta4 from "../../../../public/assets/Delta/delta4.jpg";
import ModeleTwoList from '../ModeleTwoList';

const Delta = () => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const handlClick1 = () => {
        setVisible1(true);
        setVisible2(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".delta1").classList.add("border-2")
        document.querySelector(".delta2").classList.remove("border-2")
        document.querySelector(".delta3").classList.remove("border-2")
        document.querySelector(".delta4").classList.remove("border-2")
    };

    const handlClick2 = () => {
        setVisible2(true);
        setVisible1(false);
        setVisible3(false);
        setVisible4(false);
        document.querySelector(".delta1").classList.remove("border-2")
        document.querySelector(".delta2").classList.add("border-2")
        document.querySelector(".delta3").classList.remove("border-2")
        document.querySelector(".delta4").classList.remove("border-2")
    };

    const handlClick3 = () => {
        setVisible3(true);
        setVisible1(false);
        setVisible2(false);
        setVisible4(false);
        document.querySelector(".delta1").classList.remove("border-2")
        document.querySelector(".delta2").classList.remove("border-2")
        document.querySelector(".delta3").classList.add("border-2")
        document.querySelector(".delta4").classList.remove("border-2")
    };

    const handlClick4 = () => {
        setVisible4(true);
        setVisible1(false);
        setVisible3(false);
        setVisible2(false);
        document.querySelector(".delta1").classList.remove("border-2")
        document.querySelector(".delta2").classList.remove("border-2")
        document.querySelector(".delta3").classList.remove("border-2")
        document.querySelector(".delta4").classList.add("border-2")
    };


    return (
        <div className='pb-32 container'>
            <div>
                <div className="flex flex-row justify-center gap-10 ">
                    {visible1 && (
                        <ModeleTwoList
                            image={delta1}
                            imageTitle="Modèle de CV DELTA"
                            title="Subtile innovation – Le Modèle Delta, là où la créativité rencontre la sobriété."
                            details="Le Modèle Delta est une ode à la créativité maîtrisée. Avec des éléments graphiques innovants mais jamais envahissants, il offre une présentation originale tout en restant professionnel et accessible."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Bleu de Minuit"
                        />
                    )}
                    {visible2 && (
                        <ModeleTwoList
                            image={delta2}
                            imageTitle="Modèle de CV DELTA"
                            title="Subtile innovation – Le Modèle Delta, là où la créativité rencontre la sobriété."
                            details="Le Modèle Delta est une ode à la créativité maîtrisée. Avec des éléments graphiques innovants mais jamais envahissants, il offre une présentation originale tout en restant professionnel et accessible."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Noir"
                        />
                    )}
                    {visible3 && (
                        <ModeleTwoList
                            image={delta3}
                            imageTitle="Modèle de CV DELTA"
                            title="Subtile innovation – Le Modèle Delta, là où la créativité rencontre la sobriété."
                            details="Le Modèle Delta est une ode à la créativité maîtrisée. Avec des éléments graphiques innovants mais jamais envahissants, il offre une présentation originale tout en restant professionnel et accessible."
                            price="9,99 €"
                            newPrice="3,99 €"
                            couleur="Jaune Pâle"
                        />
                    )}
                    {visible4 && (
                        <ModeleTwoList
                            image={delta4}
                            imageTitle="Modèle de CV DELTA"
                            title="Subtile innovation – Le Modèle Delta, là où la créativité rencontre la sobriété."
                            details="Le Modèle Delta est une ode à la créativité maîtrisée. Avec des éléments graphiques innovants mais jamais envahissants, il offre une présentation originale tout en restant professionnel et accessible."
                            price="11,99 €"
                            newPrice="4,99 €"
                            couleur="Pack de 03 Couleurs"
                        />
                    )}
                </div>
                <div className="flex flex-row my-4 gap-10 items-center justify-center md:justify-end">
                    <div
                        onClick={handlClick1}
                        className="delta1 border-red-500 border-2 w-8 h-8 cursor-pointer  bg-[#203864]"
                    ></div>
                    <div
                        onClick={handlClick2}
                        className="delta2 border-red-500 w-8 h-8 cursor-pointer  bg-black"
                    ></div>
                    <div
                        onClick={handlClick3}
                        className="delta3 border-red-500 w-8 h-8 cursor-pointer  bg-[#ffd966]"
                    ></div>
                    <div
                        onClick={handlClick4}
                        className="delta4 border-red-500 w-8 h-8 cursor-pointer  bg-gradient-to-l from-[#203864] via-black to-[#ffd966]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Delta;
