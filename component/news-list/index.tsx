import { DUMMY_NEWS } from "@/dummy-news"
import { NewsItem } from "@/dummy-news"
import Link from "next/link"


interface NewsListProps {
    news: NewsItem[];
  }
  
export default function NewsList({news} : NewsListProps)
{
   return <ul className="news-list">
   {
    DUMMY_NEWS.map((newsItem)=><li key={newsItem.id}>
      <Link href={`/news/${newsItem.slug}`}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        <span>{newsItem.title}</span>
      </Link>
    </li>)
   }
    </ul>
}