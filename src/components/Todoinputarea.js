import React from 'react'
import { Form,FormGroup, Row,Label,Input,Button} from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import {addtotodolist,getalltodos,addid } from "../actionsandstore/Todoekle"
import { useState } from 'react'
import alertify from "alertifyjs"


function Todoinputarea() {
  const dispatch=useDispatch()
  const [deger,setDeger]= useState('')
  const id=useSelector(state =>state.todo.id)
  
  
   
  
  const value={
    id:id,
    description:deger
  }
  
  const onsubmithandler=(e)=>{
         e.preventDefault()
         dispatch(addtotodolist(value))
         
         dispatch(addid())
         
  }
  
  return (
    <div>
      <Form onSubmit={onsubmithandler}  className='buyut'>
            <FormGroup className='text-center '>
            <Row>
         
          
          <Label  for='todolistinput'>todo</Label>
          
          
          
        </Row>
            
            <Input  onChange={e=>setDeger(e.target.value.trim())} placeholder='pls write to todo' type='text' name='todo' id='todolistinput'   ></Input>
            <Button type='submit' color='success'>add to todolist</Button>
            </FormGroup>

        </Form>
      
    </div>
  )
}

export default Todoinputarea

