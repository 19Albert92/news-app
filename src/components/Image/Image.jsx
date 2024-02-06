import styles from './styles.module.css';
import PropTypes from "prop-types";

const Image = ({image}) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image === 'None' ? 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' : image} alt={'news image'} className={styles.image}/> : null}
        </div>
    );
};

Image.propTypes = {
    image: PropTypes.string
}

export default Image;
