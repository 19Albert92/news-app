import styles from './styles.module.css';
import withSkeleton from "@/helpers/hocs/withSkeleton.tsx";
import NewsBanner from "@/components/NewsBanner/NewsBanner.tsx";
import {INews} from "@/interfaces";

interface Props {
    banners?: INews[] | null
}

const BannersList = ({banners}: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner =>
                <NewsBanner key={banner.id} item={banner}/>
            )}
        </ul>
    );
};

const NewsBannersWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')

export default NewsBannersWithSkeleton;
