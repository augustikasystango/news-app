import NewsList from "@/component/news-list";
import { getNewsForYear } from "@/lib/news";

type FilteredNewsPageProps = {
  params: {
    year: string;
  };
};

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
