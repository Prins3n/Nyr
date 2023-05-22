import React, { useState } from 'react';
import { Link , useMatch , useResolvedPath } from 'react-router-dom';
import { styles } from '../styles';
import logo from './bilder/nyrlogo.svg';
import menu from './bilder/menu.svg';
import close from './bilder/close.svg';


export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    toggleMenu();
    scrollToTop();
  };


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#e9ebea]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
          <img src={logo} alt="logo" className="w-18 h-12 cursor-pointer object-contain" />
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <img src={close} alt="close" className="w-6 h-6" />
            ) : (
              <img src={menu} alt="menu" className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex flex-row gap-10 font-bold">
          <CustomLink to="/" onClick={scrollToTop}>Forside</CustomLink>
          <CustomLink to="/om" onClick={scrollToTop}>Om Nýr</CustomLink>
          <CustomLink to="/is" onClick={scrollToTop}>Nýr Is</CustomLink>
          <CustomLink to="/grondalengaard" onClick={scrollToTop}>Grøndalen Gård</CustomLink>
          <CustomLink to="/velferd" onClick={scrollToTop}>Dyrevelferd</CustomLink>
          <CustomLink to="/oppskrifter" onClick={scrollToTop}>Oppskrifter</CustomLink>
          <CustomLink to="/kontakt" onClick={scrollToTop}>Kontakt Oss</CustomLink>
        </ul>
      </div>
      <div className={`sm:hidden absolute top-0 right-0 w-full h-screen bg-[#e9ebea] ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className="flex flex-col items-center mt-20 text-xl">
          <CustomLink onClick={handleClick} to="/" >Forside</CustomLink>
          <CustomLink onClick={handleClick} to="/om">Om Nýr</CustomLink>
          <CustomLink onClick={handleClick} to="/is">Nýr Is</CustomLink>
          <CustomLink onClick={handleClick} to="/grondalengaard">Grøndalen Gård</CustomLink>
          <CustomLink onClick={handleClick} to="/velferd">Dyrevelferd</CustomLink>
          <CustomLink onClick={handleClick} to="/oppskrifter">Oppskrifter</CustomLink>
          <CustomLink onClick={handleClick} to="/kontakt">Kontakt Oss</CustomLink>
        </ul>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  const style = {
    color: '#003b1d',
    fontFamily: 'Arial',
    fontStyle: 'Bold'
  };
  const activeStyle = {
    color: '#b2d587', 
    fontFamily: 'Arial',
    fontWeight: 'bold',
  };

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props} style={isActive === to ? activeStyle : style}>
        {children}
      </Link>
    </li>
  )
}