import DividendTable from "../../components/dividend-table/dividend-table"
import './dividends.css';

const Dividends = () => {
  return (
    <section className='dividends-section'>
        <div className='container'>
            <h2 className="section-title">Dividendlar haqida ma'lumot</h2>
            <DividendTable />
        </div>
    </section>
  )
}

export default Dividends