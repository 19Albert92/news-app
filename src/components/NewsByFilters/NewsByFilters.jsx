import styles from './styles.module.css';
import Categories from "@/components/Categies/Categories.jsx";
import Search from "@/components/Search/Search.jsx";
import Pagination from "@/components/Pagination/Pagination.jsx";
import {TOTAL_PAGE} from "@/constants.js";
import NewsList from "@/components/NewsList/NewsList.jsx";
import {useFetch} from "@/helpers/hooks/useFetch.js";
import {getCategories} from "@/api/apiNews.js";
import PropTypes from "prop-types";
import NewsFilters from "@/components/NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({filter, changeFilter, isLoading, news}) => {


    const {data: dataCategories} = useFetch(getCategories);

    const handleNextPage = () => {
        if (filter.currentPage < TOTAL_PAGE) {
            changeFilter('currentPage', filter.currentPage + 1)
        }
    }
    const handlePreviewsPage = () => {
        if (filter.currentPage > 1) {
            changeFilter('currentPage', filter.currentPage - 1)
        }
    }

    return (
        <section className={styles.section}>

          <NewsFilters filter={filter} changeFilter={changeFilter}/>

            {/*<Pagination*/}
            {/*    totalPages={TOTAL_PAGE}*/}
            {/*    handleNextPage={handleNextPage}*/}
            {/*    handlePreviewsPage={handlePreviewsPage}*/}
            {/*    handleClickPage={handleClickPage}*/}
            {/*    currentPage={filter.currentPage}*/}
            {/*/>*/}

            <NewsList news={news} isLoading={isLoading}/>

            <Pagination
                totalPages={TOTAL_PAGE}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={(page) =>  changeFilter('currentPage', page)}
                currentPage={filter.currentPage}
            />
        </section>
    );
};

NewsByFilters.propTypes = {
    filter: PropTypes.object,
    changeFilter: PropTypes.func,
    isLoading: PropTypes.bool,
    news: PropTypes.array,
}

export default NewsByFilters;
