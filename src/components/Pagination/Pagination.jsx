import styles from './styles.module.css';
import PropTypes from "prop-types";

const Pagination = ({totalPages, handleClickPage, handleNextPage, handlePreviewsPage, currentPage}) => {
    return (
        <div className={styles.pagination}>
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

Pagination.propTypes = {
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    handleClickPage: PropTypes.func,
    handleNextPage: PropTypes.func,
    handlePreviewsPage: PropTypes.func,
}

export default Pagination;
