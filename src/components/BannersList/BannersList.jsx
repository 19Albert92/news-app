import styles from './styles.module.css';
import PropTypes from "prop-types";
import withSkeleton from "@/helpers/hocs/withSkeleton.jsx";
import NewsBanner from "@/components/NewsBanner/NewsBanner.jsx";

const BannersList = ({banners}) => {
    return (
        <ul className={styles.banners}>
            {banners.map(banner =>
                <NewsBanner key={banner.id} item={banner}/>
            )}
        </ul>
    );
};

const NewsBannersWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

BannersList.propTypes = {
    banners: PropTypes.array
}

export default NewsBannersWithSkeleton;
