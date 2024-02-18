import React from "react";
import bgbannerhelp from "../../../public/assets/banner_help.jpg";
import entreprise from "../../../public/assets/avis/entreprise.jpg";
import Head from "@/Components/Head";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Sections/Footer";
import WhatsAppBtn from "@/Components/WhatsAppBtn";
import Recompense from "@/Components/Recompense";
import Avis from "@/Components/Avis";

const Testimonials = () => {
    return (
        <div>
            <Head
                title="Casineuve Actions | Notre Job, vous Obtenir le Vôtre !"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation"
            />
            <Menu />
            <div className="mt-12 md:mt-20">
                <img
                    loading="lazy"
                    className="max-w-full w-full pointer-events-none"
                    src={bgbannerhelp}
                    alt="bg-banner-help"
                />
            </div>
            <div className="mx-10 md:mx-20 lg:mx-32">
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-8 text-center">
                        Plus de 2 000 Professionnels recommandent Casineuve
                        Actions
                    </h1>
                    <div className="flex flex-col gap-4 container text-center">
                        <p>
                            Depuis 2022, chez Casineuve Actions, nous avons eu
                            le privilège d'accompagner plus de 1000 candidats
                            dans le montage de leur dossier de candidature.
                        </p>
                        <p>
                            Aussi, nos modèles ont été le choix judicieux de
                            centaines de candidats, les propulsant vers de
                            nouveaux horizons professionnels et débloquant des
                            portes jusqu'alors fermées.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold my-14 text-center">
                            Comment Collectons-Nous Vos Avis & Témoignages ?
                        </h2>
                        <p className="text-center">
                            Vos avis sont la boussole qui guide notre quête
                            d'excellence. Sur notre Page{" "}
                            <a
                                className="text-blue-700 hover:underline"
                                href="https://www.facebook.com/actionscasineuve"
                            >
                                Facebook
                            </a>
                            , par{" "}
                            <a
                                className="text-blue-700 hover:underline"
                                href="https://wa.me/message/IBE7CZ6ZMHQIB1"
                            >
                                WhatsApp
                            </a>
                            , ou encore par{" "}
                            <a
                                className="text-blue-700 hover:underline"
                                href="mailto:ycasineuve@gmail.com"
                            >
                                E-mail
                            </a>
                            , nous collectons vos retours pour comprendre
                            comment nous pouvons continuer à vous accompagner de
                            manière toujours plus efficace.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold my-8 text-center">
                        Ce que nos Clients Disent de Nous
                    </h2>

                    <Avis />

                    <p className="my-8 text-center">
                        Rejoignez notre communauté de professionnels qui ont
                        fait confiance à Casineuve Actions. Nos clients
                        travaillent aujourd'hui dans des entreprises renommées.
                        Leur succès atteste de l'efficacité de notre
                        collaboration.
                    </p>
                    <img
                        loading="lazy"
                        className="max-w-full pointer-events-none container"
                        src={entreprise}
                        alt="entreprises-icon"
                    />
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold my-8 text-center">
                        Ce qu’ils ont Obtenu avec Nous
                    </h2>

                    <Recompense />

                </div>
            </div>
            <section>
                <Footer />
            </section>
            <WhatsAppBtn />
        </div>
    );
};

export default Testimonials;
