import styles from './styles.module.css';
import PropTypes from "prop-types";
import React, {useRef} from "react";

const Slider = ({children, step = 150}) => {
    const sliderRef = useRef();

    const scroll = (side) => {
        sliderRef.current.scrollLeft = side === 'left' ? sliderRef.current.scrollLeft -= step : sliderRef.current.scrollLeft += step
    }
    return (
        <div className={styles.slider}>
            <button className={styles.arrow} onClick={() => scroll('left')}>&#11164;</button>

            {React.cloneElement(children, {ref: sliderRef})}

            <button className={styles.arrow} onClick={() => scroll('right')}>&#11166;</button>
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.node,
    step: PropTypes.number
}

export default Slider;
