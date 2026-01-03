import './skeleton-row.css'
const SkeletonRow = () => {
  return (
    <div className="currency-row skeleton">
    <div className="currency-main">
      <div className="skeleton-flag" />
      <div className="skeleton-text" />
    </div>
    <div className="skeleton-icon" />
  </div>
  )
}

export default SkeletonRow