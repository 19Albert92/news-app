import styles from './styles.module.css';
import {PAGE_SIZE, TOTAL_PAGE} from "@/constants.js";
import NewsList from "@/components/NewsList/NewsList.jsx";
import {useFetch} from "@/helpers/hooks/useFetch.js";
import {getNews} from "@/api/apiNews.js";
import NewsFilters from "@/components/NewsFilters/NewsFilters.jsx";
import {useState} from "react";
import PaginationWrapper from "@/components/PaginatationWrapper/PaginationWrapper.jsx";

const NewsByFilters = () => {

    const [filter, setFilter] = useState({
        currentPage: 0,
        category: 'All',
        keywords: ''
    })

    const changeFilter = (field, value) => {
        setFilter(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const {data, isLoading} = useFetch(getNews, {
        page_number: filter.currentPage,
        page_size: PAGE_SIZE,
        category: filter.category === 'All' ? null : filter.category,
        keywords: filter.keywords
    })

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

            <PaginationWrapper
                top={true}
                bottom={true}
                totalPages={TOTAL_PAGE}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={(page) => changeFilter('currentPage', page)}
                currentPage={filter.currentPage}>

                <NewsList news={data?.news} isLoading={isLoading}/>

            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
