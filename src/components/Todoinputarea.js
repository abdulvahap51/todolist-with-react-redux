import React from 'react'
import { Form,FormGroup, Row,Label,Input,Button} from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import {addtotodolist,getalltodos } from "../actionsandstore/Todoekle"
import { useState } from 'react'

function Todoinputarea() {
  const dispatch=useDispatch()
  const [deger,setDeger]= useState('')
  
  const naber={
    id: 1,
    description:"mehmet",
    

  }
  
   
  
  const value={
    id:1,
    description:deger
  }
  const onsubmithandler=(e)=>{
         e.preventDefault()
         dispatch(addtotodolist(value))
        
         
  }
  
  return (
    <div>
      <Form onSubmit={onsubmithandler}  className='buyut'>
            <FormGroup className='text-center '>
            <Row>
         
          
          <Label  for='todolistinput'>todo</Label>
          
          
          
        </Row>
            
            <Input onChange={e=>setDeger(e.target.value.trim())} placeholder='pls write to todo' type='text' name='todo' id='todolistinput'   ></Input>
            <Button type='submit' color='success'>add to todolist</Button>
            </FormGroup>

        </Form>
      
    </div>
  )
}

export default Todoinputarea

