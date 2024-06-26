import styles from './styles.module.css';
import NewsItem from "@/components/NewsItem/NewsItem.tsx";
import withSkeleton from "@/helpers/hocs/withSkeleton.tsx";
import {INews} from "@/interfaces";

interface Props {
    news?: INews[]
}

const NewsList = ({news}: Props) => {
    return (
        <ul className={styles.list}>
            {news?.map(item=> {
                    return <NewsItem key={item.id} item={item}/>
                }
            )}
        </ul>
    );
};

const NewsItemWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)


export default NewsItemWithSkeleton;
