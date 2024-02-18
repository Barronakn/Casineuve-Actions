import Head from "@/Components/Head";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Sections/Footer";
import React from "react";
import mesure from "../../../public/assets/surmesure.jpg";
import whatsapp from "../../../public/assets/sociaux/whatsapp_icon.png";
import mail from "../../../public/assets/sociaux/mail.svg";
import WhatsAppBtn from "@/Components/WhatsAppBtn";

const SurMesure = () => {
    return (
        <div>
            <Head
                title="Casineuve Actions | Notre Job, vous Obtenir le Vôtre !"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation"
            />
            <Menu />
            <div className="flex flex-col justify-center items-center mt-20 md:mt-40 mx-10 sm:mx-20 lg:mx-32">
                <div>
                    <h1 className="font-bold text-xl md:text-3xl lg:text-6xl text-blue-500 text-center my-4">
                        Confiez-nous la clé de votre réussite professionnelle.
                    </h1>
                    <p className="text-center text-base md:text-xl my-14">
                        Envisagez une candidature irrésistible avec notre
                        expertise. Laissez-nous créer pour vous un CV percutant
                        et une lettre de motivation qui capte l'essence de votre
                        parcours et ambitions. Notre équipe est à votre écoute
                        pour personnaliser chaque élément de votre dossier selon
                        vos aspirations.
                    </p>
                </div>
                <div>
                    <img loading="lazy" className="pointer-events-none" src={mesure} alt="bannier-img" />
                </div>
                <div>
                    <p className="text-center text-base md:text-xl my-10">
                        Contactez-nous par mail ou WhatsApp pour une
                        consultation initiale, où nous discuterons ensemble de
                        vos objectifs et tracerons le chemin vers votre succès
                    </p>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <a
                            href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                            className="bg-white rounded-xl shadow-black shadow-md flex flex-row px-4 py-3 items-center gap-4"
                        >
                            <img
                                loading="lazy"
                                className="pointer-events-none w-8 h-8"
                                src={whatsapp}
                                alt="whatsapp-icon"
                            />
                            <p>WhatsApp</p>
                        </a>
                        <a
                            href="mailto:ycasineuve@gmail.com"
                            className="bg-white rounded-xl shadow-black shadow-md flex flex-row px-8 py-3 items-center gap-4"
                        >
                            <img
                                loading="lazy"
                                className="pointer-events-none w-8 h-8"
                                src={mail}
                                alt="mail-icon"
                            />
                            <p>Email</p>
                        </a>
                    </div>
                </div>
            </div>
            <section>
                <Footer />
            </section>
            <WhatsAppBtn />
        </div>
    );
};

export default SurMesure;
