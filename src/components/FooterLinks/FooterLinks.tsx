import styles from './style.module.scss';

function FooterLinks() {
    return (
        <footer>
            <div className={ styles.container }>
                <div className={ styles.linksList }>
                    <ul>
                        <li id={ styles.title }>OUR COMPANY</li>
                        <li>HOW WE WORK</li>
                        <li>WHY INSURE?</li>
                        <li>CHECK PRICE</li>
                        <li>REVIEWS</li>
                    </ul>
                </div>

                <div className={ styles.linksList }>
                    <ul>
                        <li id={ styles.title }>HELP ME</li>
                        <li>FAQ</li>
                        <li>TERMS OF USE</li>
                        <li>PRIVACY POLICY</li>
                        <li>COOKIES</li>
                    </ul>
                </div>

                <div className={ styles.linksList }>
                    <ul>
                        <li id={ styles.title }>CONTACT</li>
                        <li>SALES</li>
                        <li>SUPPORT</li>
                        <li>LIVE CHAT</li>
                    </ul>
                </div>

                <div className={ styles.linksList }>
                    <ul>
                        <li id={ styles.title }>OTHERS</li>
                        <li>CAREERS</li>
                        <li>PRESS</li>
                        <li>LICENSES</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterLinks;