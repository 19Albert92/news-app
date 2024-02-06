import styles from './styles.module.css';
import PropTypes from "prop-types";

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
    return (
        <div className={styles.categories}>
            {categories.map((category, index) =>
                <button
                    key={index}
                    className={selectedCategory === category ? styles.active : styles.item}
                    onClick={() => setSelectedCategory(category)}
                >{category}</button>
            )}
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    setSelectedCategory: PropTypes.func,
    selectedCategory: PropTypes.string,
}

export default Categories;
