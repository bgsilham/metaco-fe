import React from 'react'
import {Image, Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

export default function Explorer() {
  let navigate = useNavigate()
  return(
    <div>
      <div className='exp-container-event'>
        <div className='d-flex flex-row exp-search-wrapper'>
          <Form.Control className='exp-search' type="text" placeholder="Search player ..." />
          <div>
            <FaSearch color='#fff' className='mx-2' size={20}/>
          </div>
        </div>
        <div className='exp-wrapper'>
          <h6 className='exp-wrapper-res'>Hasil: 1 Player</h6>
          <div className='d-flex flex-row mt-3'>
            <div className='exp-player-card mx-2'>
              <Image className='exp-player-ava' src="https://teamrrq.com/assets/member/wPBcf_lemon_2021_web.png" />
              <h6 className='exp-player-name'>Ilham</h6>
              <h6 className='exp-player-email'>ilham@mail.com</h6>
              <h6 className='exp-player-coin'>10 Coin</h6>
            </div>
            <div className='exp-player-card mx-2'>
              <Image className='exp-player-ava' src="https://teamrrq.com/assets/member/wPBcf_lemon_2021_web.png" />
              <h6 className='exp-player-name'>Ilham</h6>
              <h6 className='exp-player-email'>ilham@mail.com</h6>
              <h6 className='exp-player-coin'>10 Coin</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}