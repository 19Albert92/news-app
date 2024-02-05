import PropTypes from "prop-types";
import styles from './styles.module.css';
import NewsItem from "@/components/NewsItem/NewsItem.jsx";

const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item, index) => {
                    if (index !== 0) {
                        return <NewsItem key={item.id} item={item}/>
                    }
                }
            )}
        </ul>
    );
};

NewsList.propTypes = {
    news: PropTypes.array
}

export default NewsList;
