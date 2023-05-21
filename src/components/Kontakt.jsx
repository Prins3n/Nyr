import React from 'react';
import {styles} from '../styles';

export const Kontakt = () => {
    return (
      <section className="flex-1 flex flex-col min-h-screen mx-auto pb-16">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-71xl mx-auto flex flex-row items-start gap-5 text-center`}
        >
          <div className="max-w-screen-lg mx-auto">
            <h1
              className={`${styles.heroHeadText} justify-center items-center`}
            >
              <span className="text-[#003b1d]">Kontakt</span>
              <span className="text-[#ebebe9]"> oss</span>
            </h1>
            <div className="w-full h-1 rounded-md bg-[#ebebe9] mb-2"></div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex-col">
                {/* List of all partners and contactinfo */}
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <p className="font-bold text-[#003b1d]">
                    Grøndalen Gårdsmeieri
                  </p>
                  <span className="text-[#003b1d]">
                    Grøndalsvegen 17 <br />
                    1929 Auli <br />
                    909 05 773 <br />
                    larskristian@nyr.no <br />
                    <a
                      href="https://www.facebook.com/Lykkeligekuer"
                      target="_blank "
                      className="underline"
                    >
                      Facebook
                      <br />
                    </a>
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  {" "}
                  <p className="font-bold mt-2 text-[#003b1d]">Engrosfrukt AS</p>
                  <span className="mb-5 text-[#003b1d]">
                    918 81 203 <br />
                    post@engrosfrukt.no <br />
                    <a href="https://www.engrosfrukt.no" className="underline">
                      Engrosfrukt.no
                    </a>{" "}
                    <br />
                    <br />
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <span className="mt-5 text-[#003b1d]">
                    <span className='font-bold'>
                    Eugen AS <br />
                    </span>
                    Langhus <br />
                    Håndverksveien 31 <br />
                    22 88 68 50 <br />
                    eugen-johansen@engrosfrukt.no <br />
                    <a href="https://webshop.eugen.as/" className="underline">
                      Eugen.As
                    </a>{" "}
                    <br />
                    <br />
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <span className="mt-2 text-[#003b1d]">
                    <span className='font-bold'>
                    Brødrene Raastad As <br />
                    </span>
                    Økern Torgvei 3 <br />
                    23 17 41 00 <br />
                    raastad@engrosfrukt.no <br />
                    <a href="https://www.raastad.no" className="underline">
                      Raastad.no
                    </a>{" "}
                    <br />
                    <br />
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <span className="mt-2 text-[#003b1d]">
                    <span className='font-bold'>
                    Dagens <br />
                    </span>
                    Storgata 36C <br />
                    815 03 266 <br />
                    <a href="https://dagens.farm/" className="underline">
                      foreløpig nettside skift
                    </a>{" "}
                    <br />
                    <br />
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <span className='text-[#003b1d]'>
                    <span className='font-bold'>
                    Måkestad Engros AS
                    </span>
                    <br />
                    Lønningshaugen 2<br />
                    5258 Blomsterdalen
                    <br />
                    55 14 10 00
                    <br />
                    <a
                      href="http://www.makestadengros.no"
                      className="underline"
                    >
                      Makestadengros.no
                    </a>
                    <br />
                    <br />
                  </span>
                </div>
                <div className="bg-[#ebebe9] bg-opacity-50 p-3 rounded-xl block mb-4 max-w-sm">
                  <span className='text-[#003b1d]'>
                    <span className='font-bold'>
                    BAMA <br />
                    </span>
                    Trading avd. ferskvare <br />
                    Postboks 123 Økern <br />
                    0509 OSLO <br />
                    22 88 05 00
                    <br />
                    975 15 122
                    <br />
                    arnfinn.opsahl@bama.no
                    <br />
                    <a href="http://www.bama.no" className="underline">
                      Bama.no
                    </a>
                    <br />
                    Leverer til alle Bama storkjøkken avdelinger over hele
                    landet
                    <br />
                    <br />
                  </span>
                </div>
              </div>
              {/* Kart */}
              <div>
                <iframe
                  className="w-full h-64 sm:w-96 rounded-xl sm:ml-5 mb-5"
                  frameborder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?q=Gr%C3%B8ndalsvegen%2017%2C%201929%20Auli&zoom=12&key=AIzaSyCJrXf1wxTkHBbfiNfBeh3eVqIWxkrsto4"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};