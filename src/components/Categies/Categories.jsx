import styles from './styles.module.css';
import PropTypes from "prop-types";
import {forwardRef} from "react";

const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button
                className={selectedCategory === 'All' ? styles.active : styles.item}
                onClick={() => setSelectedCategory('All')}
            >All</button>
            {categories.map((category, index) =>
                <button
                    key={index}
                    className={selectedCategory === category ? styles.active : styles.item}
                    onClick={() => setSelectedCategory(category)}
                >{category}</button>
            )}
        </div>
    );
});

Categories.displayName = 'Categories';

Categories.propTypes = {
    categories: PropTypes.array,
    setSelectedCategory: PropTypes.func,
    selectedCategory: PropTypes.string,
}

export default Categories;
