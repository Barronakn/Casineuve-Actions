import { Link, usePage } from "@inertiajs/react";
import React from "react";
import Logo from "./Logo";
import MenuResponsiv from "./MenuResponsiv";

const Menu = () => {
    const { url } = usePage();

    const nav = [
        {
            linkName: "Modèles de CV",
            link: "/",
        },
        {
            linkName: "CV Sur-Mesure",
            link: "/cvsurmesure",
        },
        {
            linkName: "Avis et Témoignages",
            link: "/avisettemoignages",
        },
        {
            linkName: "Aide",
            link: "/aide",
        },
    ];

    return (
        <div className="flex flex-row justify-between px-10 sm:px-20 md:px-0 md:justify-around items-center bg-black fixed top-0 z-50 w-full shadow-xl">
            <div className="logo">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <nav className="hidden md:block">
                <ul className="flex flex-row md:gap-8 lg:gap-14">
                    {nav.map((navlink, index) => (
                    <li key={index}>
                        <Link
                            className={
                                url == navlink.link
                                    ? "pb-2 text-white border-white border-b-4"
                                    : "pb-2 text-white hover:border-white hover:border-b-4"
                            }
                            href={navlink.link}
                        >
                            {navlink.linkName}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
            <MenuResponsiv />
        </div>
    );
};

export default Menu;
