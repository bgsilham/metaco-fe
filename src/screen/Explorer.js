import React, {useState, useEffect} from 'react'
import {Image, Form, Spinner} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

export default function Explorer() {
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [standings, setStandings] = useState([])

  const fetchSearch = (e) => {
    setSearch(e)
    setTimeout(() => {
      setIsLoading(true)
    }, 500);
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}leaderboard/user?search=${search}`)
      .then(res => {
        setStandings(res.data.data)
        setIsLoading(false)
      })
  }, [isLoading]);
  return(
    <div>
      <div className='exp-container-event'>
        <div className='d-flex flex-row exp-search-wrapper'>
          <Form.Control onChange={(e) => fetchSearch(e.target.value)} className='exp-search' type="text" placeholder="Search player ..." />
          <div>
            <FaSearch color='#fff' className='mx-2' size={20}/>
          </div>
        </div>
        <div className='exp-wrapper'>
          <h6 className='exp-wrapper-res'>Hasil: 1 Player</h6>
          <div className='exp-player-card-wrapper'>
            {isLoading ? (
              <center className="w-100">
                <Spinner animation="border" variant="light" />
              </center>
            ):(
              <>
                {standings.map((val, i) => (
                  <div className='exp-player-card my-2 mx-2'>
                    <Image className='exp-player-ava' src={val.picture} />
                    <h6 className='exp-player-name'>{val.name}</h6>
                    <h6 className='exp-player-email'>{val.email}</h6>
                    <h6 className='exp-player-coin'>{val.coin} Coin</h6>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}