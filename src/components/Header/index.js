import React, { useEffect, useState } from 'react';
import { Link , NavLink  } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ReactSwitch from 'react-switch';

function Header() {

    const { t, i18n } = useTranslation();
    const [theme , setTheme]=useState(localStorage.getItem('theme') === null ? "dark" : localStorage.getItem('theme'));

    const toggleTheme = () =>{
        theme === "dark" ? setThemeInStorage("light") : setThemeInStorage("dark");
    };

    const setThemeInStorage = (theme) => {
        localStorage.setItem('theme', theme)
        setTheme(theme);
    }


    useEffect(()=>{
        document.body.className = theme;
    },[theme]);

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${theme === "dark" ? 'navbar-dark bg-dark' : 'navbar-light bg-custom'}`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">2022-23 Super Powered</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive? "nav-link active": "nav-link" } >{t('header.scorer')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/timer" className={({ isActive }) => isActive? "nav-link active": "nav-link" } >{t('header.timer')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/timer3" className={({ isActive }) => isActive? "nav-link active": "nav-link" } >{t('header.timer3')}</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('header.resources.title')}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a target="_blank" rel="noreferrer" className="dropdown-item" href="http://www.era.org.tw/main/wp-content/uploads/2022/09/Challenge-RGR_SUPERPOWERED_%E7%B9%81%E4%B8%ADV1_20220902_compressed-1.pdf">{t('header.resources.sub1_title')}</a></li>
                                <li><a target="_blank" rel="noreferrer"className="dropdown-item" href="https://firstinspiresst01.blob.core.windows.net/first-energize/fll-challenge/fll-challenge-superpowered-robot-game-rulebook.pdf">{t('header.resources.sub2_title')}</a></li>
                                <li><a target="_blank" rel="noreferrer"className="dropdown-item" href="https://firstjapan.jp/first2/wp-content/uploads/2022/08/Challenge-RGR_SUPERPOWERED-%E6%97%A5%E6%9C%AC%E8%AA%9E.pdf">{t('header.resources.sub3_title')}</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                        <div style={{marginTop:"auto",marginBottom:"auto"}}>
                        <li className="nav-item">
                            <ReactSwitch 
                            checkedIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" className="text-white" viewBox="-2 0 30 25" fill="#FFC700">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            }
                            uncheckedIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" height="100%" className="text-white" viewBox="-4 0 40 25" fill="#FFC700">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            } 
                            onChange={toggleTheme}
                            onColor="#41484F"
                            onHandleColor="#2693e6"
                            checked={theme==="dark"} 
                            height={24}
                            width={48}
                            />
                        </li>
                        </div>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-globe mr-2"> Lang</i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{left:'auto' , right:'0px'}} >
                                <li><a onClick={()=>handleClick('tw')} className="dropdown-item">中文(台灣)</a></li>
                                <li><a onClick={()=>handleClick('en')} className="dropdown-item">English</a></li>
                                <li><a onClick={()=>handleClick('jp')} className="dropdown-item">日本語</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Header
