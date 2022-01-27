import React, { useState, useEffect } from 'react';
import {Image, Spinner, Modal, Button, Form} from 'react-bootstrap'
import { FaPen, FaTrash, FaPlusCircle } from "react-icons/fa";
import axios from 'axios';
import qs from 'querystring'

export default function DetailEvent() {
  const [isLoading, setIsLoading] = useState(true)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [firstPlace, setFirstPlace] = useState([])
  const [secondPlace, setSecondPlace] = useState([])
  const [thirdPlace, setThirdPlace] = useState([])
  const [teamData, setTeamData] = useState([])
  const [position, setPosition] = useState([])
  const [teamId, setTeamId] = useState(0)

  const addTeam = () => {
    setShowModalAdd(false)
    const data = {
      team_id: teamId,
      tournament_id: 1,
      position: position,
      point: position === 1 ? 5 : position === 2 ? 3 : 2,
    }
    if (teamId !== 0) {
      axios.post(`http://192.168.56.1:8100/tournament/result`, qs.stringify(data))
      .then(res => {
        setIsLoading(true)
      }).catch((err) => {
        alert(err)
      })
    } else {
      alert("Select team first!")
    }
  }

  const editTeam = () => {
    setShowModalEdit(false)
    const id = position === 1 ? firstPlace[0].id : position === 2 ? secondPlace[0].id : thirdPlace[0].id
    const data = {
      team_id: teamId,
      tournament_id: 1,
      position: position,
      point: position === 1 ? 5 : position === 2 ? 3 : 2,
    }
    if (teamId !== 0) {
      axios.patch(`http://192.168.56.1:8100/tournament/result/${id}`, qs.stringify(data))
      .then(res => {
        setIsLoading(true)
      }).catch((err) => {
        alert(err)
      })
    } else {
      alert("Select team first!")
    }
  }

  useEffect(() => {
    axios.get(`http://192.168.56.1:8100/tournament/result/1?position=1`)
      .then(res => {
        setFirstPlace(res.data.data);
        axios.get(`http://192.168.56.1:8100/tournament/result/1?position=2`)
          .then(res => {
            setSecondPlace(res.data.data);
            axios.get(`http://192.168.56.1:8100/tournament/result/1?position=3`)
              .then(res => {
                setThirdPlace(res.data.data);
                axios.get(`http://192.168.56.1:8100/tournament/result/team`)
                  .then(res => {
                    setTeamData(res.data.data);
                    setIsLoading(false)
                  })
              })
          })
      })
  }, [isLoading]);

  return(
    <div>
      <Image className='img-jumbotron' src='https://metacoweb.s3.amazonaws.com/event/images/e6ae5e5ba0c4782217c664337b676500.jpg' />
      <div className='container-event'>
        <h6 className='dtl-event-title'>Metaco Online Tournament MLBB #1 2022 - Ended</h6>
        <h6 className='dtl-event-subtitle'>01 Jan 2022 | Online</h6>
        {isLoading ? (
          <center>
            <Spinner animation="border" variant="light" />
          </center>
        ):(
          <div>
            <h6 className='dtl-event-body-title'>Tournament Results</h6>
            <div className='dtl-event-standing-card'>
              <div className='d-flex flex-row align-items-center'>
                <Image src='https://metaco.gg/images/leaderboard/1.png'/>
                {firstPlace.length > 0 ? (
                  <h6 className='mx-4'>{firstPlace[0].team_name}</h6>
                ):(
                  <FaPlusCircle onClick={() => {
                    setShowModalAdd(true)
                    setPosition(1)
                  }} className='mx-4' size={25}/>
                )}
              </div>
              <div className='d-flex flex-row'>
                {firstPlace.length > 0 ? (
                  <>
                    <FaPen onClick={() => {
                      setShowModalEdit(true)
                      setPosition(1)
                    }} className='mx-1' />
                    <FaTrash className='mx-1' />
                  </>
                ):(
                  <></>
                )}
              </div>
            </div>
            <div className='dtl-event-standing-card'>
              <div className='d-flex flex-row align-items-center'>
                <Image src='https://metaco.gg/images/leaderboard/2.png'/>
                {secondPlace.length > 0 ? (
                  <h6 className='mx-4'>{secondPlace[0].team_name}</h6>
                ):(
                  <FaPlusCircle onClick={() => {
                    setShowModalAdd(true)
                    setPosition(2)
                  }} className='mx-4' size={25}/>
                )}
              </div>
              <div className='d-flex flex-row'>
                {secondPlace.length > 0 ? (
                  <>
                    <FaPen onClick={() => {
                      setShowModalEdit(true)
                      setPosition(2)
                    }} className='mx-1' />
                    <FaTrash className='mx-1' />
                  </>
                ):(
                  <></>
                )}
              </div>
            </div>
            <div className='dtl-event-standing-card'>
              <div className='d-flex flex-row align-items-center'>
                <Image src='https://metaco.gg/images/leaderboard/3.png'/>
                {thirdPlace.length > 0 ? (
                  <h6 className='mx-4'>{thirdPlace[0].team_name}</h6>
                ):(
                  <FaPlusCircle onClick={() => {
                    setShowModalAdd(true)
                    setPosition(3)
                  }} className='mx-4' size={25}/>
                )}
              </div>
              <div className='d-flex flex-row'>
                {thirdPlace.length > 0 ? (
                  <>
                    <FaPen onClick={() => {
                      setShowModalEdit(true)
                      setPosition(3)
                    }} className='mx-1' />
                    <FaTrash className='mx-1' />
                  </>
                ):(
                  <></>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ADD MODAL */}
      <Modal show={showModalAdd} onHide={() => setShowModalAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select onChange={(e) => setTeamId(e.target.value)} aria-label="Default select example">
            <option value={0}>--select--</option>
            {teamData.map((val) => (
              <option value={val.id}>{val.name}</option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalAdd(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addTeam}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {/* EDIT MODAL */}
      <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select onChange={(e) => setTeamId(e.target.value)} aria-label="Default select example">
            <option value={0}>--select--</option>
            {teamData.map((val) => (
              <option value={val.id}>{val.name}</option>
            ))}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editTeam}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}