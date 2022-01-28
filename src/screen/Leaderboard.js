import React, {useState, useEffect} from 'react'
import {Image, Form, Table, Spinner} from 'react-bootstrap'
import axios from 'axios';

export default function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [standings, setStandings] = useState([])
  const [search, setSearch] = useState('')

  const fetchSearch = (e) => {
    setSearch(e)
    setTimeout(() => {
      setIsLoading(true)
    }, 500);
  }

  useEffect(() => {
    axios.get(`http://192.168.56.1:8100/leaderboard/team?search=${search}`)
      .then(res => {
        setStandings(res.data.data)
        setIsLoading(false)
      })
  }, [isLoading]);
  return(
    <div>
      <Image className='img-jumbotron' src='https://metaco.gg/images/leaderboard-banner.png' />
      <div className='container-event'>
        <div className='ldb-header-wrapper'>
          <h6 className='container-title'>Leaderboard</h6>
          <Form.Control onChange={(e) => fetchSearch(e.target.value)} className='ldb-search' type="text" placeholder="Search team ..." />
        </div>
        <Table borderless className='ldb-table'>
          <tr className='ldb-table-header'>
            <th className='ldb-table-txt'>RANKING</th>
            <th className='ldb-table-txt'>TEAM/GAME ID</th>
            <th className='ldb-table-txt'>KAPTEN</th>
            <th className='ldb-table-txt'>POIN</th>
          </tr>
          <div className='mt-2' />
          {isLoading ? (
            <tr>
              <td colSpan={4}>
                <center>
                  <Spinner animation="border" variant="light" />
                </center>
              </td>
            </tr>
          ):(
            <>
            {standings.map((val, i) => (
              <>
                {i < 3 ? (
                  <>
                    <tr className='ldb-table-child-light'>
                      <td className='ldb-table-child-light-cell-left'>
                        <div>
                          <Image width={30} src={`https://metaco.gg/images/leaderboard/${i+1}.png`} />
                          <Image className='mx-2' width={30} src={val.logo} />
                        </div>
                      </td>
                      <td className='ldb-table-child-light-cell ldb-table-txt'>{val.name}</td>
                      <td className='ldb-table-child-light-cell ldb-table-txt'>{val.captain}</td>
                      <td className='ldb-table-child-light-cell-right ldb-table-txt'>{val.point}</td>
                    </tr>
                    <div className='mt-2' />
                  </>
                ):(
                  <>
                    <div className='mt-2' />
                    <tr className='ldb-table-child-primary'>
                      <td>
                        <div className='d-flex'>
                          <h6 className='ldb-table-txt'>{i+1}</h6>
                          <Image className='mx-4' width={30} src={val.logo} />
                        </div>
                      </td>
                      <td className='ldb-table-txt'>{val.name}</td>
                      <td className='ldb-table-txt'>{val.captain}</td>
                      <td className='ldb-table-txt'>{val.point}</td>
                    </tr>
                  </>
                )}
              </>
            ))}
            </>
          )}
        </Table>
      </div>
    </div>
  )
}