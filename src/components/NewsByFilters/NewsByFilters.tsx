import styles from './styles.module.css';
import {PAGE_SIZE, TOTAL_PAGE} from "@/constants.ts";
import NewsList from "@/components/NewsList/NewsList.tsx";
import {useFetch} from "@/helpers/hooks/useFetch.ts";
import {getNews} from "@/api/apiNews.ts";
import NewsFilters from "@/components/NewsFilters/NewsFilters.tsx";
import {useState} from "react";
import PaginationWrapper from "@/components/PaginatationWrapper/PaginationWrapper.tsx";
import {NewsApiResponse, ParamsType} from "@/interfaces";

interface Filter {
    currentPage: number,
    category: string,
    keywords: string
}

const NewsByFilters = () => {

    const [filter, setFilter] = useState<Filter>({
        currentPage: 0,
        category: 'All',
        keywords: ''
    })

    const changeFilter = (field: string, value: any) => {
        setFilter(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
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

    // @ts-ignore
    return (
        <section className={styles.section}>

            <NewsFilters filter={filter} changeFilter={changeFilter}/>

            <PaginationWrapper
                top={true}
                bottom={true}
                totalPages={TOTAL_PAGE}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={(page: number) => changeFilter('currentPage', page)}
                currentPage={filter.currentPage}>

                <NewsList news={data?.news} isLoading={isLoading}/>

            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
