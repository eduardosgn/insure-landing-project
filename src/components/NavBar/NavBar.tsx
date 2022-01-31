import { useState } from 'react';

import InsureLogo from '../../public/logo.svg';
import BurgerIcon from '../../public/icon-hamburger.svg';
import CloseIcon from '../../public/icon-close.svg';

import styles from './style.module.scss';

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <>
            <section className={styles.containerNav}>
                <img src={ InsureLogo } alt="Insure" />

                <button onClick={handleOpenNav}>
                    { openNav ? <img src={ CloseIcon } alt="" /> : <img src={ BurgerIcon } alt="" /> }
                </button>
            </section>

            <nav className={ openNav ? `${styles.menuMobile} ${styles.showMenu}` : `${styles.menuMobile}` }>
                <ul>
                    <li>How we work</li>
                    <li>Blog</li>
                    <li>Account</li>
                    <li id={ styles.viewPlans }>View Plans</li>
                </ul>
            </nav>
        </>
    );
};