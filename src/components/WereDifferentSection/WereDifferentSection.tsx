import styles from './styles.module.scss';
import SnappyProcess from '../../public/icon-snappy-process.svg';
import Affordable from '../../public/icon-affordable-prices.svg';
import PeopleFirst from '../../public/icon-people-first.svg';

export default function WereDifferentSection() {
    return (
        <section>
            <div className={ styles.container }>
                <div className={ styles.wrapper }>
                    <div id={ styles.divider }></div>
                    <h2>We're Different</h2>

                    <div className={ styles.cardWrapper }>
                        <div className={ styles.card }>
                            <img src={ SnappyProcess } alt="Snappy Process" />
                            <h2>Snappy Process</h2>
                            <p>Our application process can be completed in minutes, not hours. Don’t get 
                            stuck filling in tedious forms.</p>
                        </div>

                        <div className={ styles.card }>
                            <img src={ Affordable } alt="Affordable prices" />
                            <h2>Affordable Prices</h2>
                            <p>We don't want you worrying about high monthly costs. Our prices may be low, 
                            but we still offer the best coverage possible.</p>
                        </div>

                        <div className={ styles.card }>
                            <img src={ PeopleFirst } alt="People First" />
                            <h2>People First</h2>
                            <p>Our plans aren't full of conditions and clauses to prevent payouts. We make 
                            sure you're covered when you need it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};