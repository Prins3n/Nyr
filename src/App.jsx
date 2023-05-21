import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import {Hero} from './components/Hero';
import {Om} from './components/Om';
import {Is} from './components/Is';
import {Gaard} from './components/Gaard';
import {Kontakt} from './components/Kontakt';
import {NavBar} from './components/NavBar';
import {Oppskrifter} from './components/Oppskrifter';
import {Velferd} from './components/Velferd';

ReactGA.initialize('G-H4QFL0N9F8');


export const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pagename);
  }, [location]);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/om" element={<Om />} />
          <Route path="/is" element={<Is />} />
          <Route path="/oppskrifter" element={<Oppskrifter />} />
          <Route path="/grondalengaard" element={<Gaard />} />
          <Route path="/velferd" element={<Velferd />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </>
  )
}
