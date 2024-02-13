import styles from './styles.module.css';

interface Props {
    image: string
}

const Image = ({image}: Props) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img
                src={image === 'None' ? 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' : image}
                alt={'news image'} className={styles.image}/> : null}
        </div>
    );
};

export default Image;
