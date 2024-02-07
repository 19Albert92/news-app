import styles from './styles.module.css';
import Categories from "@/components/Categies/Categories.jsx";
import Search from "@/components/Search/Search.jsx";
import {useFetch} from "@/helpers/hooks/useFetch.js";
import {getCategories} from "@/api/apiNews.js";
import PropTypes from "prop-types";
import Slider from "@/components/Slider/Slider.jsx";

const NewsFilters = ({filter, changeFilter}) => {

    const {data: dataCategories} = useFetch(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories &&
                <Slider>
                    <Categories categories={dataCategories.categories} selectedCategory={filter.category}
                                setSelectedCategory={(category) => changeFilter('category', category)}/>
                </Slider>
            }

            <Search keywords={filter.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    );
};

NewsFilters.propTypes = {
    filter: PropTypes.object,
    changeFilter: PropTypes.func,
}

export default NewsFilters;
