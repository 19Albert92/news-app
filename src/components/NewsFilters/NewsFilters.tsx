import styles from './styles.module.css';
import Categories from "@/components/Categies/Categories.tsx";
import Search from "@/components/Search/Search.tsx";
import {useFetch} from "@/helpers/hooks/useFetch.ts";
import {getCategories} from "@/api/apiNews.ts";
import Slider from "@/components/Slider/Slider.tsx";
import {CategoriesApiResponse, IFilters} from "@/interfaces";

interface Props {
    filter: IFilters,
    changeFilter: (key: string, value: string | null) => void;
}

const NewsFilters = ({filter, changeFilter}: Props) => {

    const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories &&
                <Slider>
                    <Categories categories={dataCategories.categories} selectedCategory={filter.category}
                                setSelectedCategory={category => changeFilter('category', category)}/>
                </Slider>
            }

            <Search keywords={filter.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    );
};

export default NewsFilters;
