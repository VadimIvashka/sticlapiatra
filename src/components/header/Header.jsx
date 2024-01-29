import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';
import cat from './../../img/icons/snapedit.png';
import cati from './../../img/icons/snapedit2.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import style from './header.module.css';
import { useTranslation } from 'react-i18next';
import '../../translate/i18n';
import LanguageSwitcher from './../../translate/LanguageSwitcher'
	
function Header () {
    const [nav, setNav] = useState(false);
	const { t } = useTranslation();
    return (
		<header className="header">
			<div className="container">
				<div className="header__row">
				<div className="header__logo">
				<div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
                </div>
				  
				<NavLink to="/"><div><img src={cat} alt="" /></div></NavLink>
				<NavLink to="/"><div><img src={cati} alt="" /></div></NavLink>
						</div>
                        <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
						<NavLink to="/granit"><li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head1')}</a></li></NavLink>
					    <NavLink to="/steklo"><li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head2')}</a></li></NavLink>
				     	<NavLink to="/another"><li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head3')}</a></li></NavLink>
					    <NavLink to="/about"><li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head4')}</a></li></NavLink>
						<NavLink to="/blog"><li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head5')}</a></li></NavLink>
						<NavLink to="/contact"> <li><a className='headerair' onClick={() => setNav(!nav)} href="#!">{t('head6')}</a></li></NavLink>					                           							
						<LanguageSwitcher/>
                        </ul>
				</div>
			</div>
		</header>
	);
}

export default Header;