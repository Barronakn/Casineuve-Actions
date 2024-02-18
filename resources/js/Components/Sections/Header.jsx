import React, { useState } from "react";
import bgbanner from "../../../../public/assets/banner.jpg";
import Backdrop from "./Backdrop";

const Header = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div>
            {visible && <div onClick={() => handleClick()} ><Backdrop /></div> }
            <header className="relative top-10 sm:top-16 z-0">
                <div>
                    <img
                        loading="lazy"
                        className="max-w-full w-full pointer-events-none"
                        src={bgbanner}
                        alt="bg-banner"
                    />
                </div>
                <div className="flex flex-col flex-justify-center text-center items-center gap-5 mx-10 md:mx-40 my-10">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-blue-500 text-center my-4">
                        Le recrutement est avant tout visuel
                    </h1>
                    <p className="text-base md:text-2xl">
                        Faute de pouvoir tester tous les candidats un par un au
                        travail, le recruteur va se fier à ses impressions.
                        Inutile donc de préciser à quel point il est primordial
                        de faire bonne impression avec votre dossier.
                    </p>
                    <div
                        onClick={() => handleClick()}
                        className="border-2 border-black font-bold border-solid rounded-lg px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
                    >
                        Nous confier votre dossier
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
