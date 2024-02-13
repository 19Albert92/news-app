import styles from './styles.module.css';
import {DirectionType, SkeletonType} from "@/interfaces";

interface Props {
    type?: SkeletonType,
    count?: number,
    directory?: DirectionType
}

const Skeleton = ({count = 1, type = 'banner', directory = 'column'}: Props) => {
    return (
        <>
            {count > 1 ?
                <ul className={directory === 'column' ? styles.column_list : styles.row_list}>
                    {[...Array(count)].map((_, index) =>
                        <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                    )}
                </ul> :
                <li className={type === 'banner' ? styles.banner : styles.item}></li>
            }
        </>
    );
};

export default Skeleton;
