import React from "react";
import { styles } from "../styles";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


import kuogkalv from "./bilder/ku1.jpg";
import merke from "./bilder/dyrevernmerket.png";

import f_1 from "./bilder/dyrevelferd-slide1.webp";
import f_2 from "./bilder/dyrevelferd-slide2-scaled.webp";
import f_3 from "./bilder/dyrevelferd-slide3.webp";

export const Velferd = () => {
  
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    opacity: 0.5,
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "30vh",
  };

  const slideImages = [
    {
      src: f_1,
    },
    {
      src: f_2,
    },
    {
      src: f_3,
    },
  ];

   //for større enheter.
const SlideShow = ({ slideImages }) => (
  <div className="hidden md:block">
    <Slide>
      {slideImages.map((slideImage, index) => (
        <div key={index} className="relative w-full h-auto">
          <img src={slideImage.src} alt="slide" className="w-full h-full object-cover" />
        </div>
      ))}
    </Slide>
  </div>
);

 //for mobiler.
const StaticImage = ({ slideImages }) => (
  <div className="block md:hidden">
    <img src={slideImages[0].src} alt="static" className="w-full h-auto object-cover" />
  </div>
);

  return (
    <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5 text-center`}
      >
        <div className="max-w-screen-lg mx-auto">
          <h1 className={`${styles.heroHeadText} justify-center items-center`}>
            <span className="text-[#003b1d]">Dyre</span>
            <span className="text-[#ebebe9]">velferd</span>

            <div className="w-full h-1 rounded-md bg-[#ebebe9]"></div>
          </h1>
          <div className="flex-1 mt-2 mb-2">
            {/* Slide */}
            <SlideShow slideImages={slideImages} />
            <StaticImage slideImages={slideImages} />
          </div>
          <p>
          </p>
          {/* textinnhold */}
          <div className="flex-col items-center sm:flex-row">
            <p className="font-bold text-center text-md sm:text-lg">
              Nýr fra Grøndalen Gård – første dyrevernmerket meieriprodukt
            </p>
            <p className="text-center mb-5 text-md sm:text-lg">
              På Grøndalen Gård har vi tre kjerneverdier: STOLT, FRISK og
              OMTENKSOM. Verdiene preger folk, dyra, produktene og miljøet. Vi
              legger stor vekt på dyrevelferd. Viktigst for oss er at kua får
              være mor for kalven sin. Kuene og kalvene går ut og inn som de vil
              hele året, og får ligge i myk halmseng. I sommerhalvåret beiter
              dyra i det flotte kulturlandskapet langs Glomma.{" "}
            </p>
            <p className="mb-5 text-center text-md sm:text-lg">
              Nýr var det første meieriproduktet som fikk tildelt
              Dyrevernmerket. Dyrevernmerkets kriterier er utarbeidet av
              Dyrevernalliansens fagteam av veterinærer, biologer og
              sivilagronomer.
            </p>
            <div className="flex items-center mb-5">
              <img
                src={merke}
                alt="Dyrevernmerket"
                className="mr-4 w-28 h-28"
              ></img>
              <div>
                <span className="font-bold text-center block mr-28">
                  Melkeproduksjon
                </span>
                <span className="mb-5 text-center block text-md sm:text-lg">
                  De fleste kuer i Norge står bundet på bås, og kalven blir tatt
                  fra dem rett etter fødselen. På Grøndalen gård går derimot
                  kuene fritt inne i fjøset. De har også tilgang til stort
                  uteområde hele året. Kalvene får dessuten være med mora de
                  første 6-8 ukene.
                </span>
              </div>
            </div>

            <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-5"></div>

            <img
              src={kuogkalv}
              alt="ku og kalv"
              className="flex rounded-xl items-center w-auto h-auto mx-auto"
            ></img>
            <p className="text-center italic mb-5">
              Kua får være sammen med kalven sin i 6-8 uker på Grøndalen gård.
              Foto: I. L. Hauge
            </p>
            <p className="mb-5 text-center text-md sm:text-lg">
              Grøndalen gård er økologisk, men dyrene er sikret bedre
              dyrevelferd enn minstekravet i det økologiske regelverket.
              Minstekravet er kun at kalven skal være med mora de 3 første
              levedagene. Dessuten er båsfjøs tillatt.
            </p>
            <p className="font-bold text-center">Driftsform</p>
            <p className="mb-5 text-center text-md sm:text-lg">
              Gården er økologisk, og har 16 NRF-kuer. Gulvet i fjøset er talle,
              av flis og halm. Fra mai til oktober går de på et kupert
              beiteområde, rett ved fjøset. I vinterhalvåret har de tilgang til
              en stor luftegård. Kalven får gå sammen med mora de første
              levemånedene, og får da drikke så mye melk fra juret som den vil.
              Når tiden er kommet for at ku og kalv skal skilles, prøver bonden
              å tilpasse tidspunktet slik at to kalver skilles fra samtidig.
              Dermed opplever kalvene det som mindre belastende å bli skilt fra
              mora si.{" "}
            </p>
            <p className="mb-5 text-center text-md sm:text-lg">
              De avvente kalvene plasseres i en binge rett ved mødrene. Det er
              åpninger i bingeskillet slik at mødrene kan ha både fysisk og
              visuell kontakt med kalvene sine. Etter avvenning har fortsatt
              kalvene pattebehov. Derfor gir bonden dem melk fra tåteflaske og
              etter hvert melk fra bøtte med smokk.{" "}
            </p>
            <p className="mb-5 text-center text-md sm:text-lg">
              Bonden har generelt opplevd svært få praktiske problemer relatert
              til å la kalv og ku gå sammen. For å forebygge problemer, er han
              mye tilstede i fjøset og følger med.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
