import NewsList from "@/component/news-list"
import { DUMMY_NEWS } from "@/dummy-news"

function NewsPage() {
  return (
    <>
    <h2>News Page</h2>
   <NewsList news={DUMMY_NEWS}/>
   
    </>
  )
}

export default NewsPage
