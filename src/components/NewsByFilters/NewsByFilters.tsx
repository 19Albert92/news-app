import styles from './styles.module.css';
import {PAGE_SIZE, TOTAL_PAGE} from "@/constants.ts";
import NewsList from "@/components/NewsList/NewsList.tsx";
import NewsFilters from "@/components/NewsFilters/NewsFilters.tsx";
import PaginationWrapper from "@/components/PaginatationWrapper/PaginationWrapper.tsx";
import {useGetNewsQuery} from "@/store/services/NewsApi.ts";
import {useAppDispatch, useAppSelector} from "@/store";
import {setFilters} from "@/store/slices/NewsSlice.ts";

const NewsByFilters = () => {

    const filter = useAppSelector(state => state.news.filters);

    const filterDispatcher = useAppDispatch();

    const changeFilter = (field: string, value: any) => {
        filterDispatcher(setFilters({
            key: field,
            value: value
        }))
    }

    const {data, isLoading} = useGetNewsQuery({
        page_number: filter.currentPage,
        page_size: PAGE_SIZE,
        category: filter.category === 'All' ? null : filter.category,
        keywords: filter.keywords
    });

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
                handleClickPage={(page: number) => changeFilter('currentPage', page)}
                currentPage={filter.currentPage}>

                <NewsList news={data?.news} isLoading={isLoading}/>

            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
