import React from 'react';
import { Link } from 'react-router-dom';

export const Gaard = () => {
  return (
    <div className="grondalen-gard-container">
      <div className="hero-image">
        <img src="https://www.nyr.no/filestore/Gr%C3%B8ndalen/15708.jpg" alt="Grøndalen Gård" />
        <div className="hero-text">
          <h1>Grøndalen Gård</h1>
          <p>Opplev roen på landet</p>
        </div>
      </div>
      <div className="content">
        <h2>Om gården</h2>
        <p>Grøndalen Gård er en tradisjonsrik gård som har vært i familien i flere generasjoner. Gården ligger idyllisk til i skogkanten, omkranset av grønne jorder og frodige skogområder. Her kan du oppleve roen på landet og nyte vakker natur.</p>
        <h2>Aktiviteter</h2>
        <p>På Grøndalen Gård kan du delta på ulike aktiviteter, som ridning, fiske, og gårdsarbeid. Vi tilbyr også overnatting i vårt gjestehus, der du kan oppleve livet på gården på nært hold. </p>
        <h2>Kontakt</h2>
        <p>Du kan kontakte oss på telefon <a href="tel:+4712345678">123 45 678</a>, eller sende oss en e-post på <a href="mailto:post@grondalengard.no">post@grondalengard.no</a>.</p>
      </div>
      <div className="cta-container">
        <Link to="/booking" className="cta-button">Book nå</Link>
      </div>
    </div>
  );
};