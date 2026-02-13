import { getEmbedUrl } from "../../commons"
import { GenericDetail } from "../../components/generic-detail/generic-detail"

const VideosDetail = () => {
  return (
    <GenericDetail
        resource='videoPosts'
        renderMedia={(item) => (
            item.videoUrl ? (
                <iframe src={getEmbedUrl(item.videoUrl)} title={item.title} allowFullScreen className="detail-media-element" />
            ) : <img src={item.imageUrl} alt={item.title} className="detail-media-element" />
        )}
    />
  )
}

export default VideosDetail