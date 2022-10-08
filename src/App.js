import {  Col,Container , Row} from "reactstrap";
import Todoinputarea  from "./components/Todoinputarea";
import Todolist from "./components/Todolist";
import { useSelector,useDispatch } from 'react-redux'
import {addtotodolist,getalltodos } from "./actionsandstore/Todoekle"



function App() {
  
const dispatch=useDispatch()
dispatch(getalltodos())
  
  return (
    <div >
      <Container>
        <Row>
          <Col  sm="3"></Col>
          <Col sm="6">
          <Todoinputarea></Todoinputarea>
          </Col>
          <Col sm="3" ></Col>
          
        </Row>
        <Row>
          
          <Todolist  ></Todolist>
          
          
        </Row>
        
        
        
      </Container>
      
     

    </div>
  );
}

export default App;
