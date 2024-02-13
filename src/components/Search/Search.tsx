import styles from './styles.module.css';
import {useState} from "react";

interface Props {
    keywords: string,
    setKeywords: (keywords: string) => void
}

const Search = ({keywords, setKeywords}: Props) => {

    const [text, setText] = useState(keywords);

    const changeHandler = (e: any) => {
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

export default Search;
