import React from "react";
import Btn from "./Btn";
import sheet from "../../../public/assets/icon/sheet.svg";
import pen from "../../../public/assets/icon/pen.svg";
import question from "../../../public/assets/icon/question-circle.svg";
import card from "../../../public/assets/icon/credit-card-pay.svg";

const ModeleOneList = ({
    image,
    imageTitle,
    title,
    details,
    price,
    newPrice,
    couleur,
}) => {
    return (
        <div className="container">
            <h2 className="font-bold text-base md:text-2xl text-center sm:mx-10 md:mx-20 lg:mx-32 my-5">
                {title}
            </h2>
            <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-10">
                <div className="left w-full lg:w-1/2">
                    <img
                        loading="lazy"
                        className="pointer-events-none"
                        src={image}
                        alt="modèles-alpha"
                    />
                    <h2>{imageTitle}</h2>
                    <h3>
                        <strong>Couleur : </strong>
                        <span className="uppercase">{couleur}</span>
                    </h3>
                </div>
                <div className="right w-full lg:w-1/2 flex flex-col gap-5 items-center">
                    <div className="flex flex-row gap-2">
                        <div>
                            <img
                                loading="lazy"
                                className="pointer-events-none max-w-full md:w-8 w-20 md:h-8 h-20"
                                src={sheet}
                                alt="sheet-icon"
                            />
                        </div>
                        <div>
                            <p>
                                <span className="text-blue-500 font-bold">
                                    Formats Word & PowerPoint :
                                </span>{" "}
                                Facile à éditer sur tous les Systèmes (Windows
                                er Mac) et parfait pour tous types de
                                candidatures.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <img
                                loading="lazy"
                                className="pointer-events-none max-w-full md:w-8 w-20 md:h-8 h-20"
                                src={pen}
                                alt="pen-icon"
                            />
                        </div>
                        <div>
                            <p>
                                <span className="text-blue-500 font-bold">
                                    Modifiable à l'Infini :{" "}
                                </span>
                                Changez les couleurs, les polices, et
                                l'agencement selon vos préférences.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <img
                                loading="lazy"
                                className="pointer-events-none max-w-full md:w-8 w-20 md:h-8 h-20"
                                src={question}
                                alt="question-icon"
                            />
                        </div>
                        <div>
                            <p>
                                <span className="text-blue-500 font-bold">
                                    Assistance Garantie :{" "}
                                </span>
                                Notre équipe est là pour répondre à toutes vos
                                questions via WhatsApp ou Email
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <img
                                loading="lazy"
                                className="pointer-events-none max-w-full md:w-8 w-20 md:h-8 h-20"
                                src={card}
                                alt="card-icon"
                            />
                        </div>
                        <div>
                            <p>
                                <span className="text-blue-500 font-bold">
                                    Paiement Facile :{" "}
                                </span>
                                Plusieurs options de paiement sécurisées
                                disponibles ({" "}
                                <strong>Paiements Mobiles y compris</strong>)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <Btn totalPrice={newPrice} />
                        <span className="text-green-500 text-lg font-bold">
                            {newPrice}
                        </span>
                        <span className="text-red-500 line-through">
                            {price}
                        </span>
                    </div>
                    <p>{details}</p>
                    <p className="font-bold">
                        Avec son design qui capte l'attention, préparez-vous à
                        être en tête de liste !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModeleOneList;
