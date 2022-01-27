import React from 'react'
import {Image} from 'react-bootstrap'
import { FaPen, FaTrash, FaPlusCircle } from "react-icons/fa";

export default function DetailEvent() {
  return(
    <div>
      <Image className='img-jumbotron' src='https://metacoweb.s3.amazonaws.com/event/images/e6ae5e5ba0c4782217c664337b676500.jpg' />
      <div className='container-event'>
        <h6 className='dtl-event-title'>Metaco Online Tournament MLBB #1 2022 - Ended</h6>
        <h6 className='dtl-event-subtitle'>01 Jan 2022 | Online</h6>
        <div>
          <h6 className='dtl-event-body-title'>Tournament Results</h6>
          <div className='dtl-event-standing-card'>
            <div className='d-flex flex-row align-items-center'>
              <Image src='https://metaco.gg/images/leaderboard/1.png'/>
              <h6 className='mx-4'>EVOS</h6>
            </div>
            <div className='d-flex flex-row'>
              <FaPen className='mx-1' />
              <FaTrash className='mx-1' />
            </div>
          </div>
          <div className='dtl-event-standing-card'>
            <div className='d-flex flex-row align-items-center'>
              <Image src='https://metaco.gg/images/leaderboard/2.png'/>
              <FaPlusCircle className='mx-4' size={25}/>
            </div>
            <div className='d-flex flex-row'>
              <FaPen className='mx-1' />
              <FaTrash className='mx-1' />
            </div>
          </div>
          <div className='dtl-event-standing-card'>
            <div className='d-flex flex-row align-items-center'>
              <Image src='https://metaco.gg/images/leaderboard/3.png'/>
              <FaPlusCircle className='mx-4' size={25}/>
            </div>
            <div className='d-flex flex-row'>
              <FaPen className='mx-1' />
              <FaTrash className='mx-1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}