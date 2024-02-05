import styles from './styles.module.css';
import {formatTimeAgo} from "@/helpers/formatTimeAgo.js";
import PropTypes from "prop-types";
import Image from "@/components/Image/Image.jsx";

const NewsBanner = ({item}) => {
    return (
       <div className={styles.banner}>
           <Image image={item?.image}/>
           <h3 className={styles.title}>{item.title}</h3>
           <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
       </div>
    );
};

NewsBanner.propTypes = {
    item: PropTypes.object
}

export default NewsBanner;
