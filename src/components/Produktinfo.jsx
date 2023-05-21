import React from 'react';

import spesialitet from './bilder/spesialitetnorge.png';

export const Produktinfo = () => {
    return (
        <section>
        <div className="flex items-center justify-center flex-col bg-white rounded-xl opacity-80 sm:ml-5 w-full sm:w-3/5 min-h-[fit-content] max-h-[80vh] mt-5">
        <p className="text-[#003b1d] text-[14px] w-2/3 h-auto font-bold">
          Nýr inneholder bare 6,4% fett
          <br />
          16,2% tørrstoff
          <br />
          5,8% protein
          <br />
          3,3% karbohydrater.
          <br />
          100 g Nýr gir 391 kj eller 93 kcal.
          <br />
          <br />
          <p className="text-[12px] font-normal">
            Nýr kan brukes i stedet for rømme og fløte i mange matretter.
            Med lav fettprosent og høyt proteininnhold er Nýr et spennende
            og sunt alternativ. Den unike syrlige smaken balanserer med
            både søtt og salt og gjør at Nýr kan brukes til det meste.
            Bruk fantasien og gjør som Norges fremste kokker; sett Nýr på
            menyen!
          </p>
        </p>
        <img
          src={spesialitet}
          className="items-center justify-center"
        ></img>
        <p className="text-[#003b1d] text-sm mb-5">
          Nýr er tildelt merket for Spesialitet. <br />
          Merket tildeles den beste lokalmaten og skal løfte fram lokalmat
          med særlige kvaliteter og gjøre den enkel å finne i butikken.{" "}
          <a href="https://www.spesialitet.no/" className="underline">
            Les mer her.
          </a>
        </p>
      </div>
      </section>
    )
}