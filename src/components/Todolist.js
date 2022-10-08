import React from "react";
import { ListGroup, ListGroupItem, Row, Button, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { removefromtodolist,removealltodos,getalltodos } from "../actionsandstore/Todoekle";
import alertify from "alertifyjs"

export default function Todolist() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.value);
  // dispatch(addtotodolist(naber))

  return (
    <div>
      <ListGroup>
        {list.map((listeleman) => (
          <ListGroupItem key={listeleman.payload.id}>
            <Row className="align-items-center">
              <Col sm="8">
                <p id="seen"  className="buyutp">
                  {listeleman.payload.description}
                </p>
              </Col>
              <Col className="text-center" sm="4">
                <Button
                outline
                  id="see"
                  onClick={(e) => {
                    if (e.target.id === "see") {
                      console.log(e.target.parentElement.previousSibling.firstChild.textContent);
                      dispatch(removefromtodolist(e.target.parentElement.previousSibling.firstChild.textContent))
                      alertify.success("todo başarıyla silindi")
                    }
                  }}
                  color="danger"
                >
                  remove from todo
                </Button>
              </Col>
            </Row>
          </ListGroupItem>

        ))}
      </ListGroup>
      <br ></br>
      <div className="text-center">
      <Button onClick={(e)=>{alertify.confirm('alert', 'Do you wanna remove all', function(){ dispatch(removealltodos())
      console.log("silindi")
      dispatch(getalltodos())
      alertify.success("todolar başarıyla silindi")
      }
                , function(){ alertify.error('Cancel')})
                e.preventDefault()}
      } outline color="warning">remove all todos</Button>
      </div>
      <br>
      </br>
    </div>
  );
}
