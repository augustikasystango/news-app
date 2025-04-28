
type NewsDetailsPageProps ={
    params:{
        newsSlug : string
    }
}

function NewsDetailsPage({params} : NewsDetailsPageProps){


    return (<div>
        <p>News Details Page</p>
        Index news : {params.newsSlug}</div>)
}

export default NewsDetailsPage