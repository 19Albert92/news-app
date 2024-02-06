import styles from './styles.module.css';
import NewsBanner from "@/components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "@/api/apiNews.js";
import NewsList from "@/components/NewsList/NewsList.jsx";
import Skeleton from "@/components/Skeleton/Skeleton.jsx";
import Pagination from "@/components/Pagination/Pagination.jsx";

const Main = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = 10;
    const pageSize = 10;
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePreviewsPage = () => {
        console.log(currentPage)
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleClickPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const fetchingNews = async () => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {

        fetchingNews()
    }, [currentPage])
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton/>}

            <Pagination
                totalPages={totalPage}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />

            {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}

            <Pagination
                totalPages={totalPage}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
