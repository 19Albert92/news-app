import styles from './styles.module.css';
import PropTypes from "prop-types";

const Skeleton = ({count = 1, type = 'banner'}) => {
    return (
        <>
            {count > 1 ?
                <ul className={styles.list}>
                    {[...Array(count)].map((_, index) =>
                        <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                    )}
                </ul> :
                <li className={type === 'banner' ? styles.banner : styles.item}></li>
            }
        </>
    );
};

Skeleton.propTypes = {
    count: PropTypes.number,
    type: PropTypes.string
}

export default Skeleton;
