import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { addmovie } from '../JS/Actions/MovieActions';
import { Button } from 'react-bootstrap';

const AddMovie = () => {
    const [Newmovie,setNewmovie]= useState({id:Math.random()})
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setNewmovie({...Newmovie,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        dispatch(addmovie(Newmovie))
        navigate("/Movielist")
      }
  return (
    <div>
         <>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type='text' placeholder="title input" onChange={(e) => handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" type='text' placeholder="description input" onChange={(e) => handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control name="rate" type='number' placeholder="rate input" onChange={(e) => handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control name="posterUrl" type='text' placeholder="posterUrl input" onChange={(e) => handleChange(e)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Trailer</Form.Label>
        <Form.Control name="trailer" type='text' placeholder="trailer input" onChange={(e) => handleChange(e)} />
      </Form.Group>
      <Button onClick={()=>handleClick()} variant="primary" type="submit">
          Add Movie
        </Button>
      
    </>
    </div>
  )
}

export default AddMovie