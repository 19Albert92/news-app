import styles from './styles.module.css';
import PropTypes from "prop-types";

const Image = ({image}) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt={'news image'} className={styles.image}/> : null}
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.string
}

export default Image;
