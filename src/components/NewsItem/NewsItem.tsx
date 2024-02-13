import styles from './styles.module.css';
import {formatTimeAgo} from "@/helpers/formatTimeAgo.ts";
import {INews} from "@/interfaces";

interface Props {
    item: INews
}

const NewsItem = ({item}: Props) => {
    return (
        <li className={styles.item}>
            <div className={styles.image} style={{
                backgroundImage: `url(${item.image === 'None' ? 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' : item.image})`
            }}></div>
            <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    );
};


export default NewsItem;
