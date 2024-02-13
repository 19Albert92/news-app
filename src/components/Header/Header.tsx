import styles from './styles.module.css';
import {formatDate} from "@/helpers/formatDate.ts";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                News Reactify App
            </h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;
