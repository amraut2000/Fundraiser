import React, { useContext } from "react"
import { Context } from "../../../Context"
import Fundraiser from "../../../utils/Fundraiser.json"

const Card = (props) => {
  const { id, title, hostName, goalAmount, description, fundraiserBalance } =
    props
  const { web3 } = useContext(Context)

  const progressWidth =
    (parseInt(fundraiserBalance) * 100) / parseInt(goalAmount)

  const progress=progressWidth.toFixed(2)

  const toEther = (amount) => web3.utils.fromWei(amount, "ether")
  return (
    <div className="card">
      <div>
        <h2 className="title">{title}</h2>
        <h2 className="host">
          Hosted by <span>{hostName}</span>
        </h2>
      </div>
      <h2 className="goal">
        Goal amount:{" "}
        <span>
          {parseInt(goalAmount) > 1000000000
            ? toEther(goalAmount) + " ETH"
            : goalAmount + " Wei"}
        </span>
      </h2>
      <p className="description">
        {description.slice(0, 210)}
        {description.length > 200 ? "..." : ""}
      </p>
      <a className="donate" href={`/donate/${id}`}>
        Donate
      </a>
      <a className="donate" href={`/track1/${id}`}>
        History
      </a>
      <div className="progress-bar"></div>
      <div>
        <p style={{marginTop:10, color:"green"}}> {`${progress}%`} donations received till date!</p>
      </div>
      <div className="progress" style={{ width: `${progressWidth}%` }}></div>
    </div>
  )
}

export default Card
