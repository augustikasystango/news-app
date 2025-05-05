
import NewsList from "@/component/news-list"
import { getAllNews } from "@/lib/news";

async function NewsPage() {

const news = getAllNews();


  return (
    <>
    <h2>News Page</h2>
  <NewsList news={news}/>
  
   
    </>
  )
}

export default NewsPage
