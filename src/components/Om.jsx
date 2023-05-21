import React from "react";
import { styles } from "../styles";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import slide1 from './bilder/om-nyr-slide1.webp';
import slide2 from './bilder/om-nyr-slide2.webp';
import slide3 from './bilder/om-nyr-slide3.webp';
import slide4 from './bilder/om-nyr-slide4.webp';
import slide5 from './bilder/om-nyr-slide5.webp';
import slide6 from './bilder/om-nyr-slide6.webp';
import slide7 from './bilder/om-nyr-slide7.webp';

import { Produktinfo } from "./Produktinfo";


export const Om = () => {

  const slideImages = [
    {
      src: slide1,
    },
    {
      src: slide2,
    },
    {
      src: slide3,
    },
    {
      src: slide4,
    },
    {
      src: slide5,
    },
    {
      src: slide6,
    },
    {
      src: slide7,
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
    <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16 w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-100 mx-auto flex flex-row items-start gap-5 text-center`}
      >
        <div className="max-w-screen-lg mx-auto">
          <h1
            className={`${styles.heroHeadText} text-[#003b1d] justify-center items-center`}
          >
            Nýr -
            <span className="text-[#ebebe9]">
              {" "}
              syrlig<span className="text-[#003b1d]">,</span> kry ferskost{" "}
            </span>
          </h1>

          <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-2"></div>
          <div className="">
            <SlideShow slideImages={slideImages}/>
            <StaticImage slideImages={slideImages}/>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-col">
              <p className="font-bold text-lg">
                Nýr kan brukes som frisk følge til frokostblandinger, et
                alternativ til rømme i all matlaging, i stedet for annen
                ferskost i ostekaker og som magert tilbehør til dessert i stedet
                for kremfløte.
              </p>
              <p>
                Nýr er produsert av økologisk pasteurisert helmelk uten noen
                form for tilsetningsstoffer. Mysen er silt av uten bruk av løpe.
                Når melken er syrnet ferdig henger vi opp massen i osteposer
                slik at mysen renner av. Dette gir Nyr en fantastisk konsistens.
                Nýr er ikke homogenisert.
              </p>
              <div className="w-full h-1 rounded-md mt-4 bg-[#ebebe9]"></div>
              <p className="font-bold mt-2 text-lg">
                Se historien til kuene og Nýr
              </p>
              <p className="mb-2 text-sm">
                Vi besøker Maaemo for å se hvordan de legger opp en rett med
                Nýr.
              </p>
              <div className="mt-4 max-w-full max-h-auto">
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="rounded-xl"
                    width="100%"
                    height="100%"
                    src="https://player.vimeo.com/video/54804617?h=30dfba5a69"
                    title="Nýr Maaemo"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full h-1 rounded-md mt-5 bg-[#ebebe9]"></div>
              <p className="font-bold mt-5 text-lg">Kry på flere måter</p>
              <p className="">
                Nýr er også kry fordi vi er stolte av Nýr, og hvordan produktet
                vårt blir til. Vi håper at ferskosten også vil gjøre brukerne
                kry når de bruker Nýr i rettene de lager. Navnet Nýr er satt
                sammen av Ny og yr. Nytt produkt, ny smak, ny driftsmåte med
                kalv sammen med mor. Yr og glad ku, yr kalv, yr bonde og yr
                kokk. Dette blir Nýr!
              </p>
              <p className="font-bold mt-5 text-lg">Nýr i butikk</p>
              <p>
                Nýr kan leveres til Meny-butikker over hele landet, ta kontakt
                med ferskvare-sjefen i en butikk i ditt nærmiljø.
                <br />
                Ønsker din butikk å selge Nýr, ta kontakt med{" "}
                <a href="http://localhost:3000/kontakt" className="underline">
                  {" "}
                  Lars Kristian Grøndahl.
                </a>
              </p>
              <div className="mt-4 mb-4 max-w-full max-h-auto">
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="rounded-xl"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bz-VxkqiJ8A"
                    title="Nýr fra Grøndalen Gård"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Hvit boks med produktinformasjon, burde egentlig være en egen komponent, skal fikses senere */}
            <Produktinfo />
          </div>
        </div>
      </div>
    </section>
  );
};