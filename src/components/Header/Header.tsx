import styles from './style.module.scss';

import IntroSection from '../IntroSection/IntroSection';

import FamilyImageMobile from '../../public/image-intro-mobile.jpg';

export default function Header() {
    return (
        <section className={ styles.containerHeader }>
            <div className={ styles.wrapperHeader }>
                <div className={ styles.imageWrapperMobile } style={{ backgroundImage: `url(${FamilyImageMobile})` }}>
                </div>
                <IntroSection />
            </div>
        </section>
    );
};