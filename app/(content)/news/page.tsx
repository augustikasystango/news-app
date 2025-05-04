'use client';
import NewsList from "@/component/news-list"
import { useEffect,useState } from "react";
// import { DUMMY_NEWS } from "@/dummy-news"

function NewsPage() {

  const [error,setError]= useState('');
  const [isLoading , setIsLoading]=useState(false);
  const [news,setNews]=useState();


  useEffect(()=>{
    const fetchNews=async()=>{
      setIsLoading(true);
       const res = await fetch(`http://localhost:8080/news`);
      
       if(!res.ok)
       {
         setError('Failed to load news.');
         setIsLoading(false);
        
       }
        const news = await res.json();
        setIsLoading(false);
        setNews(news);
   
      
     }
   fetchNews();
  },[]);


  if(isLoading)
  {
    return <p>Loading ...</p>
  }
  if(error)
  {
    return <p>Error</p>
  }

  let newsContent ;
  if(news)
  {
    newsContent = <NewsList news={news}/>
  }

  return (
    <>
    <h2>News Page</h2>
    {newsContent}
  
   
    </>
  )
}

export default NewsPage
