import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { DevelopmentStrategyData } from "./development-strategy.data"

const DevelopmentStrategy = () => {
  return (
    <FileCardList
        title={`Rivojlanish strategiyasi`}
        dataSource={DevelopmentStrategyData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default DevelopmentStrategy