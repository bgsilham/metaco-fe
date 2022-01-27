import React from 'react'
import {Image, Form, Table} from 'react-bootstrap'
import { FaPen, FaTrash, FaPlusCircle } from "react-icons/fa";

export default function Leaderboard() {
  return(
    <div>
      <Image className='img-jumbotron' src='https://metaco.gg/images/leaderboard-banner.png' />
      <div className='container-event'>
        <div className='ldb-header-wrapper'>
          <h6 className='container-title'>Leaderboard</h6>
          <Form.Control className='ldb-search' type="text" placeholder="Search team ..." />
        </div>
        <Table borderless className='ldb-table'>
          <tr className='ldb-table-header'>
            <th className='ldb-table-txt'>RANKING</th>
            <th className='ldb-table-txt'>TEAM/GAME ID</th>
            <th className='ldb-table-txt'>KAPTEN</th>
            <th className='ldb-table-txt'>POIN</th>
          </tr>
          <div className='mt-2' />
          <tr className='ldb-table-child-light'>
            <td className='ldb-table-child-light-cell-left'>
              <div> 
                <Image width={30} src="https://metaco.gg/images/leaderboard/1.png" />
                <Image className='mx-2' width={30} src="https://metacoweb.s3.amazonaws.com/team/thumbs/3c0e5abd323155d898f4cb9c72956942.jpg" />
              </div>
            </td>
            <td className='ldb-table-child-light-cell ldb-table-txt'>Mark</td>
            <td className='ldb-table-child-light-cell ldb-table-txt'>Otto</td>
            <td className='ldb-table-child-light-cell-right ldb-table-txt'>@mdo</td>
          </tr>
          <div className='mt-2' />
          <tr>
            <td className='ldb-table-child-light-cell-left'>&nbsp;1</td>
            <td className='ldb-table-child-light-cell'>Mark</td>
            <td className='ldb-table-child-light-cell'>Otto</td>
            <td className='ldb-table-child-light-cell-right'>@mdo</td>
          </tr>
          <div className='mt-2' />
          <tr className='ldb-table-child-primary'>
            <td className='ldb-table-txt'>&nbsp;1</td>
            <td className='ldb-table-txt'>Mark</td>
            <td className='ldb-table-txt'>Otto</td>
            <td className='ldb-table-txt'>@mdo</td>
          </tr>
        </Table>
      </div>
    </div>
  )
}