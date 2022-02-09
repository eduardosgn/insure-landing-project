import styles from './styles.module.scss';

export default function FindMore() {
    return (
        <section>
            <div className={ styles.container }>
                <div className={ styles.wrapper }>
                    <div className={ styles.titleAndLink }>
                        <h2>Find out more about how we work</h2>
                        <a href="#">How we work</a>
                    </div>
                </div>
            </div>
        </section>
    );
};