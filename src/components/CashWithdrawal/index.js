// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withDrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="profile-logo">
            <div className="profile-logo-card">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="para">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="description">In Rupees</p>
            </div>
          </div>
          <p className="side-heading">Withdraw</p>
          <p className="side-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-card">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withDrawAmount={this.withDrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
