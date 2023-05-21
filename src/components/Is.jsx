import React from 'react';
import {styles} from '../styles';
import is from './bilder/IS-nr-1-1024x687.jpg';
import is_1 from './bilder/nyr_is_1.jpg';
import is_2 from './bilder/nyr_is_2.jpg';
import is_3 from './bilder/nyr_is_3.jpg';
import is_4 from './bilder/nyr_is_4.jpg';
import is_5 from './bilder/nyr_is_5.jpg';
import is_6 from './bilder/nyr_is_6.jpg';

export const Is = () => {
    return (
      <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5 text-center`}
        >

          <div className="max-w-screen-lg mx-auto">
            <h1 className={`${styles.heroHeadText} text-[#003b1d] justify-center items-center`}>
              Nýr <span className="text-[#ebebe9]">Is</span>
            </h1>
            <div className="flex-col items-center sm:flex-row">
              <div className="w-full h-1 rounded-md bg-[#ebebe9] "></div>
              <img
                src={is}
                alt="Nýr Is"
                className="relative mt-2 max-w-full rounded-xl mx-auto w-auto"
              ></img>
              <p className="w-full mt-4 bold text-center mx-auto text-[#ebebe9]">
                Nýr is er økologisk, frisk, kremaktig og syndig god. Isen er
                laget av vår egen melk og Nýr.
              </p>
              {/* Video */}
              <div className="mt-4 max-w-full max-h-full">
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="rounded-xl"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/sDjHr5b4wow"
                    title="Nýr Is video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <p className="mx-auto mt-5 text-center mb-5 text-sm md:text-lg">
                  Nýr is inneholder 32% Nýr og melk fra kuene på Grøndalen Gård.
                  Isen smaker melk med en god friskhet av Nýr. Isen er lett og
                  passer perfekt som følge til desserten eller kaken. Nýr is er
                  et samarbeid mellom Grøndalen Gård og kokk og konditor
                  Lars-Erik Undrum i Villa Sole AS.
                  <span className="italic block mt-2">
                    «Jeg serverer gjerne en kule Nýr is ved siden av
                    sjokoladefondant eller bærpai. Himmelsk»
                  </span>{" "}
                  sier Lars-Erik.
                </p>
              </div>
              <div>
                <div className="w-full h-1 rounded-md bg-[#ebebe9] "></div>
                <p className="mx-auto m-5 text-center text-sm md:text-lg">
                  Nýr is får du kjøpt hos begge Jacobs butikkene, Meny CC-Vest,
                  Meny Bryn og Meny Colosseum.{" "}
                  <br className="sm:block hidden" /> Kiwi Auli, Spar
                  Jølstraholmen og Dyrket.no har også Nýr is. Isen vår har ingen
                  tilsatt smak, men smaker av de naturlige friske råvarene.
                </p>
              </div>
              {/* Grid av alle isene */}
              <section className="max-w-screen-lg mx-auto py-10">
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src={is_1}
                    alt="nyr is bilde 1"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                  <img
                    src={is_2}
                    alt="nyr is bilde 2"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                  <img
                    src={is_3}
                    alt="nyr is bilde 3"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                  <img
                    src={is_4}
                    alt="nyr is bilde 4"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                  <img
                    src={is_5}
                    alt="nyr is bilde 5"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                  <img
                    src={is_6}
                    alt="nyr is bilde 6"
                    className="rounded-lg h-60 w-full object-cover"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
};