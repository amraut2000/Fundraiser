import React, { useEffect, useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import TxnCard from "./components/TxnCard"
import Loader from "../../components/Loader"
import '../Track/TrackStyle.css'
function Track() {
  const { trackAddress } = useParams()
  const [result, setResult] = useState()
  const [searchBarValue, setSearchBarValue] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const searchBar = useRef("")
  const searchIcon = useRef("")

  useEffect(() => {
    const init = async () => {
      const response = await fetch(
        `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${trackAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`
      )
      const data = await response.json()
      //console.log("Status: ",data.status)
      if (data.status === "1") {
        setResult(data.result)
        setIsLoading(false)
      }
      else if(data.status === "0"){
        setResult()
        setIsLoading(false)
      } else {
        console.error("Invalid Address")
        // console.log(data)
        setResult()
      }
      setSearchBarValue(trackAddress)
      // setIsLoading(false)
    }

    if (!trackAddress) return
    init()
  }, [trackAddress])

  useEffect(() => {
    setSearchBarValue(searchBar.current.value)
    searchBar.current.focus()
  }, [searchBar])

  const _handleChange = (e) => {
    setSearchBarValue(e.target.value)
  }

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchIcon.current.click()
    }
  }

  // const getTxnCards = async (result) =>

  return (
    <>
      <div className="container">
        {/* <div>
            Enter your address to see transaction history!
        </div> */}
        <div className="container">
          <h1>Transaction History!</h1>
        </div>
        <div
          className={
            searchBarValue !== ""
              ? "search-bar-container active"
              : "search-bar-container"
          }
        >
          <input
            type="text"
            className="search-bar"
            value={searchBarValue}
            onChange={_handleChange}
            onKeyDown={_handleKeyDown}
            id="search-bar"
            ref={searchBar}
            placeholder="Enter your address to see transaction history!"
          />
          <Link
            ref={searchIcon}
            className="icon"
            to={`/track1/${searchBarValue}`}
          >
            🔍
          </Link>
        </div>
        <div className="txnCards">
          {trackAddress ? (
            isLoading ? (
              <Loader />
            ) : result ? (
              result
                .filter(
                  (item) => item.from && item.to && parseInt(item.value) !== 0
                )
                .map((item, i) => {
                  return <TxnCard txnDetails={item} key={i} />
                })
            ) : (
              <div className="error">
                <h1>No Transactions!</h1>
              </div>
            )
          ):("")}
        </div>
        <Link to="/browse">
            <button
              className="btn btn-success"
              style={{
                marginTop: "50px",
                height: "50px",
                width: "max-content",
              }}
            >
              Go Back
            </button>
          </Link>
      </div>
    </>
  )
}

export default Track
