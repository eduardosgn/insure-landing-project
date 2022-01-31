import InsureLogo from '../../public/logo.svg';
import BurgerIcon from '../../public/icon-hamburger.svg';

export default function NavBar() {
    return (
        <div>
            <img src={ InsureLogo } alt="Insure" />

            <button>
                <img src={ BurgerIcon } alt="" />
            </button>
        </div>
    );
};