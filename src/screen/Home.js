import React from 'react'
import {Image} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate()
  return(
    <div>
      <Image className='img-jumbotron' src='https://metaco.gg/images/all-article-banner.png' />
      <div className='container-event'>
        <h6 className='container-title'>Events</h6>
        <div className='mt-5'>
          <div onClick={() => navigate('/event/detail')} className='event-card'>
            <Image className='event-card-img' src='https://metacoweb.s3.amazonaws.com/event/images/e6ae5e5ba0c4782217c664337b676500.jpg' />
            <div className='event-card-body'>
              <h6 className='event-card-title'>Metaco Online Tournament MLBB #1 2022</h6>
              <h6 className='event-card-closed'>Ended</h6>
              <div className='d-flex flex-row justify-content-between'>
                <div>
                  <h6 className='event-card-free'>Free</h6>
                  <h6 className='event-card-txt'>01 Jan 2022</h6>
                </div>
                <div>
                  <h6 className='event-card-txt'>Slot</h6>
                  <h6 className='event-card-txt'>64/64</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}