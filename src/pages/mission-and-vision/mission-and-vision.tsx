import CreditStatistics from "../../components/credit-statistics/creditStatistics"
import Management from "../../components/management/management"
import { MissionAndVisionInfo } from "./mission-and-vision.data"
import './mission-and-vision.css';

const MissionAndVision = () => {
  return (
    <section className="mission-and-vision-section">
        <Management title="Jamiyat faoliyati va maqsadlari" infoData={MissionAndVisionInfo}/>
        <CreditStatistics />
    </section>
  )
}

export default MissionAndVision