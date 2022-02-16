import styles from './styles.module.scss';

import FooterLinks from '../FooterLinks/FooterLinks';

import Logo from '../../public/logo.svg';
import Facebook from '../../public/icon-facebook.svg';
import Twitter from '../../public/icon-twitter.svg';
import Pinterest from '../../public/icon-pinterest.svg';
import Instagram from '../../public/icon-instagram.svg';

export default function Footer() {
    return (
        <section>
            <div className={ styles.container }>
                <div className={ styles.wrapper }>
                    <div className={ styles.socialLinks }>
                        <img src={ Logo } alt="Insure" />

                        <div id={ styles.socialIcons }>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <img src={ Facebook } alt="Facebook Icon" />
                            </a>

                            <a href="https://www.twitter.com/" target='_blank'>
                                <img src={ Twitter } alt="Twitter Icon" />
                            </a>

                            <a href="https://www.pinterest.com/" target='_blank'>
                                <img src={ Pinterest } alt="Pinterest Icon" />
                            </a>

                            <a href="https://www.instagram.com/" target='_blank'>
                                <img src={ Instagram } alt="Instagram Icon" />
                            </a>
                        </div>
                    </div>

                    <FooterLinks />
                </div>
            </div>
        </section>
    );
};