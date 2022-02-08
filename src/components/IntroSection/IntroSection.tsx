import FamilyImage from '../../public/image-intro-desktop.jpg';

import styles from './style.module.scss';

export default function IntroSection() {

    return (
        <section className={ styles.introHeader }>
            <div className={ styles.wrapper }>
                <div className={ styles.textWrapper }>
                    <div id={ styles.whiteLine }></div>
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <button>VIEW PLANS</button>
                </div>
                <img src={ FamilyImage } alt="Family Photo" id={ styles.familyImg } />
            </div>
        </section>
    );
};