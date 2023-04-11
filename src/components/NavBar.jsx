import React from 'react';
import { Link , useMatch , useResolvedPath } from 'react-router-dom';
import { styles } from '../styles';
import logo from './bilder/nyrlogo.svg';
import menu from './bilder/menu.svg';
import close from './bilder/close.svg';


export const NavBar = () => {
    return (
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#e9ebea]`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-18 h-12 cursor-pointer object-contain" />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
              <CustomLink to="/">Om Nýr</CustomLink>
              <CustomLink to="/is">Nýr Is</CustomLink>
              <CustomLink to="/grondalengaard">Grøndalen Gård</CustomLink>
              <CustomLink to="/velferd">Dyrevelferd</CustomLink>
              <CustomLink to="/oppskrifter">Oppskrifter</CustomLink>
              <CustomLink to="/kontakt">Kontakt</CustomLink>
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
  }

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props} style={style}>
        {children}
      </Link>
    </li>
  )
}