import styles from './styles.module.css';
import BannersList from "@/components/BannersList/BannersList.jsx";
import PropTypes from "prop-types";

const LatestNews = ({banners}) => {
    return (
        <section className={styles.section}>
            <BannersList banners={banners}/>
        </section>
    );
};

LatestNews.propTypes = {
    banners: PropTypes.array,
    isLoading: PropTypes.bool,
}

export default LatestNews;
