import PropTypes from "prop-types";
import styles from './styles.module.css';
import NewsItem from "@/components/NewsItem/NewsItem.jsx";
import withSkeleton from "@/helpers/hocs/withSkeleton.jsx";

const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map(item=> {
                    return <NewsItem key={item.id} item={item}/>
                }
            )}
        </ul>
    );
};

const NewsItemWithSkeleton = withSkeleton(NewsList, 'item', 10)


NewsList.propTypes = {
    news: PropTypes.array
}

export default NewsItemWithSkeleton;
