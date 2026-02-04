import { getEmbedUrl } from "../../commons"
import { GenericDetail } from "../../components/generic-detail/generic-detail"
import { VideosData } from "../videos/videos.data"

const VideosDetail = () => {
  return (
    <GenericDetail
        dataFetcher={(id) => VideosData.find(v => v.id === id)}
        renderMedia={(item) => (
            item.videoUrl ? (
                <iframe src={getEmbedUrl(item.videoUrl)} title={item.title} allowFullScreen className="detail-media-element" />
            ) : <img src={item.imageUrl} alt={item.title} className="detail-media-element" />
        )}
    />
  )
}

export default VideosDetail