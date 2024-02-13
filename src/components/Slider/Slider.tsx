import styles from './styles.module.css';
import React, {useRef} from "react";
import {useTheme} from "@/context/ThemeContext.tsx";

interface Props {
    children: React.ReactElement,
    step?: number
}

const Slider = ({children, step = 150}: Props) => {
    const sliderRef = useRef<HTMLElement | null>();

    const {isDark} = useTheme();

    const scroll = (side: string) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft = side === 'left' ? sliderRef.current.scrollLeft -= step : sliderRef.current.scrollLeft += step
    }
    return (
        <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
            <button className={styles.arrow} onClick={() => scroll('left')}>&#11164;</button>

            {React.cloneElement(children, {ref: sliderRef})}

            <button className={styles.arrow} onClick={() => scroll('right')}>&#11166;</button>
        </div>
    );
};

export default Slider;
