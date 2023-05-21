import React  from 'react';

import {styles} from '../styles';
import lk_gaard from "./bilder/Grondale-Gaard-Bilde-av-LK-1.jpeg";
import ha_gaard from "./bilder/grondalen-gaard-slide1.jpg";
import film from "./bilder/Bygdeutviklingsprisen-2014-Nyr-SD.mp4";
import teslafilm from './bilder/grondalengaardtesla.mp4';

export const Gaard = () => {
  return (
    <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5 text-center`}
      >

        <div className="max-w-screen-lg mx-auto">
          <h1 className={`${styles.heroHeadText} text-[#003b1d] `}>
            Grøndalen <span className="text-[#ebebe9]">gård</span> 
          </h1>
          <div className="flex-col items-center sm:flex-row">
            <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-2"></div>
            <img src={lk_gaard} alt="Lars Kristian og kuer" className="rounded-xl w-full object-cover h-auto mb-5" />
            <p className='text-center mb-5 text-sm md:text-lg'>
              Grøndalen Gård er en gammel gård, som har vært i samme slekt siden 1600-tallet. Hans Arild Grøndahl og Anne Birte Olsen tok over gården i 1983. Siden den gang har det skjedd store endringer på gården. Det er bygget nytt løsdriftsfjøs og i 2013 sto ny bygning med meieri ferdig på gården. I 2015 ble biofyranlegg, solfangere og solceller installert og vi er for det meste selvforsynt med energi. I 2018 tok Lars Kristian over drifta av gård og meieri. 
              </p>
            <p className='font-bold text-center'>
              Økologisk Drift
            </p>
            <p className='mb-5 text-center text-sm md:text-lg'>
              Grøndalen gård drives økologisk. Melken kommer fra våre 19 glade kuer av rasen norsk rødt fe. Fra mai til oktober spiser kuene gress fra verdifulle kulturbeiter i ravinedaler ned mot Glomma. Her er det et stort mangfold av gressarter, kløverarter, blomster og urter. Kuene kan gå inn og ut som de selv ønsker hele året. Inne holder kuene til i et løsdriftsfjøs. Her ligger kuene på halmseng som blir tilført ny halm hver dag. I tillegg til fôret kuene spiser ute får de låvetørket høy inne.
              </p>
            <p className='font-bold text-center'>
              God dyrevelferd
            </p>
            <p className='mb-2 text-center text-sm md:text-lg'>
              Nýr fremstilles fra økologisk melk fra kuer med ekte morsglede. På Grøndalen gård får kuene lov til å ta vare på egen kalv i to måneder etter fødselen. Kua steller den nyfødte kalven, og kalven står normalt etter 30 minutter. Kalven får råmelk som er den første melken kua produserer etter fødselen. Råmelk er helt nødvendig for kalven, og det er viktig at kalven får nok råmelk. Ku og kalv får være for seg selv i 3-4 dager før kua viser fram kalven for resten av flokken. Alle kalvene har en egen avdeling der kun kalvene kommer inn om de ønsker å være for seg selv. Kalvene blir med mor ut på beite på sommer og vinter.
              </p>
            <p className='text-center mb-5 text-sm md:text-lg'>
              Vi sier at kuene våre er lykkelige og har et glimt i øyet fordi de får være mor for kalven sin og får en oppvekst som er så naturlig som mulig. For oss som driver med dyr er det en fryd å se en flokk glade kalver som løper rundt med halen høyt hevet sammen med mødrene sine.
              </p>
            <div className='flex justify-center'>
              <video controls className='w-full mb-5 rounded-xl' style={{maxWidth: '800px'}}>
                <source src={film} type="video/mp4"/>
                Your browser does not support the video tag. Prøv annen nettleser.
              </video>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-5"></div>
            <img src={ha_gaard} alt="Hans Arild og kuene" className="w-full h-auto rounded-xl mb-5" />
            <p className="absolute bottom-0 left-0 right-0 text-[#ebebe9] bg-black bg-opacity-50 px-4 py-2 rounded-xl italic hidden sm:block">
              Jeg setter dyrevelferd først, og er sikker på at mine kyr og kalver er lykkelige dyr. Dermed får melka helt spesielle karaktertrekk og sammen med produksjonsformen har vi utviklet en ferskost jeg håper flere vil få øynene opp for, sier bonde, produsent og gründer Hans Arild Grøndahl.
            </p>
          </div>
          <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-5"></div>
          <div className='flex justify-center'>
            <video controls className='w-full rounded-xl mb-2' style={{maxWidth: '800px'}}>
              <source src={teslafilm} type='video/mp4'/>
              Your browser does not support the video tag. Prøv annen nettleser.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
