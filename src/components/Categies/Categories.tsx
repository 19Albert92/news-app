import styles from './styles.module.css';
import {ForwardedRef, forwardRef} from "react";
import {CategoryType} from "@/interfaces";

interface Props {
    categories: CategoryType[];
    setSelectedCategory: (category: CategoryType | null | string) => void;
    selectedCategory: CategoryType | null | string
}

const Categories = forwardRef(({
                                   categories,
                                   setSelectedCategory,
                                   selectedCategory
                               }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button
                className={!selectedCategory ? styles.active : styles.item}
                onClick={() => setSelectedCategory(null)}
            >All
            </button>
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

export default Categories;
