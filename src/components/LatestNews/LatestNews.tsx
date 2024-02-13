import styles from './styles.module.css';
import BannersList from "@/components/BannersList/BannersList.tsx";
import {useGetCurrentNewsQuery} from "@/store/services/NewsApi.ts";

const LatestNews = () => {

    // const {data, isLoading} = useFetch<NewsApiResponse,null>(getCurrentNews);

    const {data, isLoading} = useGetCurrentNewsQuery(null);

    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;
