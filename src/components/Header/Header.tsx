import styles from './styles.module.css';
import {formatDate} from "@/helpers/formatDate.ts";
import {themeIcon} from "@/assets";
import {useTheme} from "@/context/ThemeContext.tsx";

const Header = () => {

    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
           <div className={styles.info}>
               <h1 className={styles.title}>
                   News Reactify App
               </h1>
               <p className={styles.date}>{formatDate(new Date())}</p>
           </div>
            <div className={styles.theme} onClick={toggleTheme}>
                <img src={!isDark ? themeIcon.dark : themeIcon.light} alt="theme icon"/>
            </div>
        </header>
    );
};

export default Header;
