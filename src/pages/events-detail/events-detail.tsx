import { GenericDetail } from '../../components/generic-detail/generic-detail'
import { getEmbedUrl } from '../../commons'

const EventsDetail = () => {
  return (
    <GenericDetail
        resource='event'
        renderMedia={(item) => (
            item.videoUrl ? (
                <iframe src={getEmbedUrl(item.videoUrl)} title={item.title} allowFullScreen className="detail-media-element"/>
            ) : <img src={item.imageUrl} alt={item.title} className="detail-media-element"/>
        )}
    />
  )
}

export default EventsDetail