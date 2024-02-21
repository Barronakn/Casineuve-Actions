import React from "react";
import bgbannerhelp from "../../../public/assets/banner_help.jpg";
import Head from "@/Components/Head";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Sections/Footer";
import WhatsAppBtn from "@/Components/WhatsAppBtn";
import AboutModeles from "@/Components/AboutModeles";
import FileDownload from "@/Components/FileDownload";
import Personnalisation from "@/Components/Personnalisation";
import ModelsUsers from "@/Components/ModelsUsers";

const Aide = () => {
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
      <h1 className="font-bold text-2xl lg:text-5xl text-blue-500 text-center my-10">
        Besoin d’Aide ?
      </h1>
      <p className="text-lg lg:text-3xl text-justify mx-10 md:mx-20 lg:mx-32">
        <span className="font-bold">Réponses à Vos Questions |</span> Découvrez
        ci-dessous les réponses aux questions fréquemment posées, organisées par
        thématiques pour une navigation aisée.
      </p>
      <div className=" mx-10 md:mx-20 lg:mx-32">
        <FileDownload />
      </div>
      <div className=" mx-10 md:mx-20 lg:mx-32">
        <AboutModeles />
      </div>
      <div className=" mx-10 md:mx-20 lg:mx-32">
        <ModelsUsers />
      </div>
      <div className=" mx-10 md:mx-20 lg:mx-32">
        <Personnalisation />
      </div>
      <section>
        <Footer />
      </section>
      <WhatsAppBtn />
    </div>
  );
};

export default Aide;
