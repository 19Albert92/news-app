import styles from './styles.module.css';
import Categories from "@/components/Categies/Categories.tsx";
import Search from "@/components/Search/Search.tsx";
import Slider from "@/components/Slider/Slider.tsx";
import {useGetCategoriesQuery} from "@/store/services/NewsApi.ts";

interface Filter {
    currentPage: number,
    category: string,
    keywords: string
}

interface Props {
    filter: Filter,
    changeFilter: (key: string, value: string | null) => void
}

const NewsFilters = ({filter, changeFilter}: Props) => {

    const {data} = useGetCategoriesQuery(null);

    return (
        <div className={styles.filters}>
            {data &&
                <Slider>
                    <Categories categories={data.categories} selectedCategory={filter.category}
                                setSelectedCategory={category => changeFilter('category', category)}/>
                </Slider>
            }

            <Search keywords={filter.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    );
};

export default NewsFilters;
