// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationItem, withDrawAmount} = props
  const {value} = denominationItem

  const withDraw = () => {
    withDrawAmount(value)
  }

  return (
    <li>
      <button type="button" onClick={withDraw} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
