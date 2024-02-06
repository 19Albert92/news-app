import styles from './styles.module.css';
import {useState} from "react";
import PropTypes from "prop-types";

const Search = ({keywords, setKeywords}) => {

    const [text, setText] = useState(keywords);

    const changeHandler = (e) => {
        if (e.key === 'Enter') {
            setKeywords(text)
        }
    }
    return (
        <div className={styles.search}>
            <input
                className={styles.field}
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={changeHandler}
                onBlur={() => {
                    if (text !== '') {
                        setKeywords(text);
                    }
                }}
            />
        </div>
    );
};

Search.propTypes = {
    keywords: PropTypes.string,
    setKeywords: PropTypes.func,
}

export default Search;
