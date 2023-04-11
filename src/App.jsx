import { Routes, Route } from 'react-router-dom';

import {Hero} from './components/Hero';
import {Is} from './components/Is';
import {Gaard} from './components/Gaard';
import {Kontakt} from './components/Kontakt';
import {NavBar} from './components/NavBar';
import {Oppskrifter} from './components/Oppskrifter';
import {Oss} from './components/Oss';
import {Velferd} from './components/Velferd';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/is" element={<Is />} />
          <Route path="/oppskrifter" element={<Oppskrifter />} />
          <Route path="/oss" element={<Oss />} />
          <Route path="/gaarden" element={<Gaard />} />
          <Route path="/velferd" element={<Velferd />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
