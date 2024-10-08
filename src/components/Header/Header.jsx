import React, { useContext, useEffect, useState } from 'react'
import Logo from '../sub-components/Logo/Logo'
import './Header.css'
import ToggleButton from '../sub-components/ToggleButton/ToggleButton';
import Menu from '../../assests/Images/menu.svg'
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext/ToggleContext';

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const {isToggled,setIsToggled} = useContext(ToggleContext);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setmenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const closeMenuFunc = () => {
    setmenuOpen(false)
  }

  return (
    <div className='header-block'>
      <div className='ml-10 mt- ' >
      <Link to={'/'} >
      
      <Logo/>    
      </Link>

      </div>

      <div className='header-sub-block' >
        <div className='center mr-10' >

         <h2 className='header-toggle-h2 m-5 hidden after400:block' >Toggle Theme</h2>
         <ToggleButton isToggled={isToggled} setIsToggled = {setIsToggled} />
        </div>
      <div className='relative   mr-10' >
        <img style={{height:"50px"}} onClick={() => setmenuOpen(!menuOpen)} src={Menu} alt='Menu' />
        <Link to={'/aboutme'} ><div className={` z-10 fixed font-normal w-24 text-center cursor-pointer   p-1 sidebar-item transition-all duration-200 top-[80px]  ${menuOpen? '  translate-x-[-25px]':' translate-x-full  '} `} onClick={closeMenuFunc} > About </div></Link>
        <Link to={'/portfolio'} ><div className={` z-10 fixed font-normal w-24 text-center cursor-pointer  p-1 sidebar-item transition-all duration-500 top-[130px]  ${menuOpen? ' translate-x-[-25px]':' translate-x-full '} `} onClick={closeMenuFunc} > Portfolio </div></Link>
        <Link to={'/contactme'} ><div className={` z-10 fixed font-normal w-24 text-center cursor-pointer  p-1 sidebar-item transition-all duration-1000 top-[180px]  ${menuOpen? '  translate-x-[-25px]':' translate-x-full '} `} onClick={closeMenuFunc} > Contact </div></Link>
      </div>
      </div>
    </div>
  )
}

export default Header