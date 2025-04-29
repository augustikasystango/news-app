import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";


type NewsDetailsPageProps = {
    params: {
        slug: string,

    }
}

function NewsDetailsPage({ params }: NewsDetailsPageProps) {

    const newsId = params.slug;
    console.log("slug params : ", newsId);
    console.log("available blogs : ", DUMMY_NEWS.map(n => n.slug))
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

    if (!newsItem) {
        notFound();
    }

    return (<article className="news-article">
        <header>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>News ID : {newsId}</p>
        <p>{newsItem.content}</p>
    </article>)
}

export default NewsDetailsPage