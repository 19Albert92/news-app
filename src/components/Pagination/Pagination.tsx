import styles from './styles.module.css';
import {IPaginationProps} from "@/interfaces";
import {useTheme} from "@/context/ThemeContext.tsx";

const Pagination = ({
                        totalPages,
                        handleClickPage,
                        handleNextPage,
                        handlePreviewsPage,
                        currentPage
                    }: IPaginationProps) => {
    const {isDark} = useTheme();
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button className={styles.arrow} onClick={handlePreviewsPage} disabled={currentPage + 1 <= 1}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) =>
                    <button key={index} className={styles.pageNumber}
                            disabled={index === currentPage}
                            onClick={() => handleClickPage(index)}>{index + 1}</button>
                )}
            </div>
            <button className={styles.arrow} onClick={handleNextPage} disabled={currentPage + 1 >= 10}>{'>'}</button>
        </div>
    );
};

export default Pagination;
