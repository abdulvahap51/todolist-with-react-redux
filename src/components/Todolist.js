import React from "react";
import { ListGroup, ListGroupItem, Row, Button, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { removefromtodolist } from "../actionsandstore/Todoekle";

export default function Todolist() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.value);
  // dispatch(addtotodolist(naber))

  return (
    <div>
      <ListGroup>
        {list.map((listeleman) => (
          <ListGroupItem>
            <Row className="align-items-center">
              <Col sm="8">
                <p id="seen" key={listeleman.id} className="buyutp">
                  {listeleman.payload.description}
                </p>
              </Col>
              <Col className="text-center" sm="4">
                <Button
                  id="see"
                  onClick={(e) => {
                    if (e.target.id === "see") {
                      console.log(e.target.parentElement.previousSibling.firstChild.textContent);
                      dispatch(removefromtodolist(e.target.parentElement.previousSibling.firstChild.textContent))
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
    </div>
  );
}
