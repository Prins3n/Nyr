import React from 'react';

import {styles} from '../styles';
import bilde from './bilder/nyrboetter.jpg';
import vm from './bilder/ostevm4_sml.jpg';
import morogkalv from './bilder/nyr_morogkalv.jpg'

export const Hero = () => {
    return (
        <section className='flex-1 flex flex-col min-h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start justify-center gap-5 text-center`}>

                <div className='max-w-screen-lg mx-auto'>
                    <h1 className={`${styles.heroHeadText} text-[#003b1d] justify-center items-center`}>Nýr <span className="text-[#ebebe9]">Ferskost</span></h1>
                    <div className='flex-col items-center justify-center sm:flex-row'>
                        <div className='h-1 rounded-md bg-[#ebebe9] mx-auto'></div>
                        <img src={bilde} alt ='Nýrboetter' className='relative mt-2 max-w-full rounded-xl mx-auto w-auto'></img>
                        <p className="w-full mt-2 bold text-center mx-auto text-[#ebebe9]">Nýr er allsidig og syrlig med fløyelsmyk konsistens. Passer perfekt til dressinger, sammen med grønnsaker, <br className='sm:block hidden'/>til desserter og kaker.</p>
                    </div>
                    <img src={vm} alt='osteVm' className='mt-5 rounded-xl col-auto max-w-full w-auto justify-center mx-auto'></img>
                    
                    <div className='h-1 rounded-md bg-[#ebebe9] mx-auto mt-5'></div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={morogkalv} alt='Mor og Kalv' className='my-5 rounded-xl col-auto max-w w-auto justify-center mx-auto'></img>
                        <div>
                            <h4 className={`${styles.sectionHeadText} flex justify-center items-center`}>Nýr har fått dyrevernmerket!</h4>
                            <div className='text-sm flex justify-center items-center my-5'>
                                <div className='max-w-screen-md'>
                                    <p className='inline-block'>På Grøndalen Gård er vi opptatt av at kuene skal ha et så naturlig liv som mulig den tiden de er hos oss. Kuer får en kalv hvert år, dette er naturens gang. Det mest naturlige for ei ku som får en kalv er å få være sammen med kalven sin, og for kalven er det selvfølgelig best å ha sin egen mor hos seg for å få kjærlighet og omsorg. Men det er også viktig å lære kalven hvordan den skal oppføre seg i en flokk. <br /> <br />Alle dyra har tilgang på store utearealer hele året – noe vi mener er veldig viktig for en sunn og frisk kropp. Dette blir det god melk og god Nýr av! Dette er noen av årsakene til at Grøndalen Gård fikk landets første
                                    <a href='https://dyrevernmerket.no/dyrevernmerkets-foregangsbonder/#grondalengard' className='underline'>
                                        <u> Dyrevernmerke. </u>
                                    </a>
                                    Dyrevernmerkets kriterier er utarbeidet av Dyrevernalliansens fag-team av veterinærer, biologer og sivilagronomer. <a href='https://dyrevernmerket.no/wp-content/uploads/Dyrevern-Tabeller-Melkeku.pdf' className='underline'> Les mer her.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};