import PropTypes from "prop-types";
import styles from './styles.module.css';
import {formatTimeAgo} from "@/helpers/formatTimeAgo.js";

const NewsItem = ({item}) => {
    return (
        <li className={styles.item}>
            <div className={styles.image} style={{
                backgroundImage: `url(${item.image})`
            }}></div>
            <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    );
};

NewsItem.propTypes = {
    item: PropTypes.object
}

export default NewsItem;
