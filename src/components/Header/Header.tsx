import styles from './style.module.scss';

import FamilyImageMobile from '../../public/image-intro-mobile.jpg';

export default function Header() {
    return (
        <section className={ styles.containerHeader }>
            <div className={ styles.wrapperHeader }>
                <div className={ styles.imageWrapperMobile } style={{ backgroundImage: `url(${FamilyImageMobile})` }}>
                </div>
            </div>
        </section>
    );
};