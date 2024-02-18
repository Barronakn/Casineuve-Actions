import React from "react";
import { Link } from "@inertiajs/react";
import facebook from "../../../../public/assets/sociaux/facebook_icon.png";
import linkedin from "../../../../public/assets/sociaux/linkedin_icon.png";
import tiktok from "../../../../public/assets/sociaux/tiktok_icon.png";

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="top flex flex-col md:flex-row items-center gap-10 bg-gradient-to-t bg-[#203864] to-[#1f4e79] mt-20 px-10 sm:px-20 lg:px-32 py-10">
                <div className="flex flex-col justify-center gap-5 text-white w-full md:w-1/4">
                    <h2 className="font-bold">Téléchargement direct</h2>
                    <p>
                        Finis les prises de tête. Téléchargez votre CV sans
                        créer un compte.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-5 text-white w-full md:w-1/4">
                    <h2 className="font-bold">Satisfaction garantie 100%</h2>
                    <p>
                        Plus de 2000 Professionnels à travers le monde nous
                        recommandent.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-5 text-white w-full md:w-1/4">
                    <h2 className="font-bold">Assistance & Tutoriels vidéos</h2>
                    <p>
                        Notre équipe est à votre disposition pour toutes vos
                        préoccupations.
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-5 text-white w-full md:w-1/4">
                    <h2 className="font-bold">Moyens de Paiement</h2>
                    <p>
                        Plusieurs options sécurisées s’offrent (Mobile, Visa…) à
                        vous pour le paiement.
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="flex flex-col md:flex-row gap-10 px-10 sm:px-20 lg:px-32 py-5">
                    <div className="w-full text-justify md:w-3/5">
                        <h2 className="font-bold pb-3">
                            À propos de Casineuve Actions
                        </h2>
                        <p>
                            Casineuve Actions se distingue par son engagement à
                            fournir des outils de candidature de haute qualité
                            qui allient professionnalisme et personnalisation
                            aisée. Depuis notre création, nous avons pour
                            mission d'accompagner chaque candidat dans sa quête
                            d'opportunités professionnelles, en offrant des
                            produits adaptés à une grande variété de profils et
                            de secteurs
                        </p>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h2 className="font-bold pb-3">Ressources</h2>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Modèles de CV
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/cvsurmesure"
                                >
                                    CV Sur-Mesure
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:underline"
                                    href="/avisettemoignages"
                                >
                                    Avis Clients
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:underline" href="/aide">
                                Aide
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h2 className="font-bold pb-3">Suivez-Nous !</h2>
                        <div className="flex gap-6 items-center">
                            <a href="https://www.facebook.com/actionscasineuve">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={facebook}
                                    alt="facebook-icon"
                                />
                            </a>
                            <a href="https://www.tiktok.com/@actions.casineuve">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={tiktok}
                                    alt="tiktok-icon"
                                />
                            </a>
                            <a href="https://www.linkedin.com/showcase/actions-casineuve/">
                                <img
                                    loading="lazy"
                                    className="pointer-events-none w-5 h-5"
                                    src={linkedin}
                                    alt="linkedin-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center text-base sm:text-xl py-2 sm:py-5">
                    <p className="text-center">
                        ©{" "}
                        <Link className="text-blue-600 hover:underline" href="/">
                            Casineuve Actions
                        </Link>{" "}
                        | Vous méritez de vivre votre rêve professionnel.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
