import FileCardList from "../../components/file-card-list/file-card-list"
import NewsCard from "../../components/news/newsCard"
import { NewsData } from "./news.data"

const News = () => {
  return (
    <FileCardList
        title={`Yangiliklar va e'lonlar`}
        dataSource={NewsData}
        renderItem={(item) => <NewsCard item={item} />}
    />
  )
}

export default News