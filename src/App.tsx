import Header from "./components/Header/Header.tsx";
import Main from "@/pages/Main/Main.tsx";
import {useState} from "react";

const App = () => {
    const [isDark, setIsDark] = useState<Boolean>(true);
    return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
           <Header isDark={isDark}/>
            <div className={'container'}>
                <Main/>
            </div>
        </div>
    );
};

export default App;
