import styles from './styles.module.css';
import BannersList from "@/components/BannersList/BannersList.jsx";
import {useFetch} from "@/helpers/hooks/useFetch.js";
import {getCurrentNews} from "@/api/apiNews.js";

const LatestNews = () => {

    const {data, isLoading} = useFetch(getCurrentNews);

    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;
