import React from "react"

function TxnCard(props) {
  const { from, to, timeStamp, value } = props.txnDetails

  const getDate = (timestamp) => {
    const dateObj = new Date(parseInt(timestamp) * 1000)
    let day=dateObj.getDate();
    let month=dateObj.getMonth()+1;
    let year=dateObj.getFullYear()
    if(day<10){
      day="0"+day
    }
    if(month<10){
      month="0"+month
    }
    const date =
      day +
      "/" +
      (month) +
      "/" +
      dateObj.getFullYear()
    return date
  }

  const getTime = (timestamp) => {
    const dateObj = new Date(parseInt(timestamp) * 1000)
    let hrs=dateObj.getHours();
    let mins=dateObj.getMinutes();
    let secs=dateObj.getSeconds();
    if(hrs<10){
        hrs="0"+hrs
    }
    if(mins<10){
      mins="0"+mins
    }
    if(secs<10){
      secs="0"+secs;
    }
    const time =
      hrs +
      ":" +
      mins +
      ":" +
      secs
    return time
  }

  return (
    <div className="txnCard">
      <p>
        <strong>From:</strong> {from}
      </p>
      <p>
        <strong>To:</strong> {to}
      </p>
      <p>
        <strong>Date:</strong> {getDate(timeStamp)}
      </p>
      <p>
        <strong>Time:</strong> {getTime(timeStamp)}
      </p>
      <p>
        <strong>Amount:</strong> {value} wei
      </p>
    </div>
  )
}

export default TxnCard
