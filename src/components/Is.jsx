import React from 'react';
import {styles} from '../styles';
import is from './bilder/IS-nr-1-1024x687.jpg'

export const Is = () => {
    return (
        <section id="is" className='px-4 py-20 sm:px-8 md:px-10 lg:px-20'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#003b1d]'/>
                    <div className='w-1 sm:h-80 h-40 green-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-[#003b1d]`}>Nýr <span className="text-[#ebebe9]">Is</span></h1>
                    <div className='flex-col items-center sm:flex-row'>
                        <div className='w-full h-1 rounded-md bg-[#ebebe9] '></div>
                        <img src={is} alt ='Nýr Is' className='relative mt-2 max-w-5xl rounded-xl col-auto max-w-medium'></img>  
                        <p className="w-full mt-2 items-center text-[#ebebe9]">Nýr er allsidig og syrlig med fløyelsmyk konsistens. Passer perfekt til dressinger, sammen med grønnsaker, <br className='sm:block hidden'/>til desserter og kaker.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
};