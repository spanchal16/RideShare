import React from "react";
// import upload_img from "../images/upload_doc.png";
import { Row, Container, Card, Col, Form, Button } from "react-bootstrap";

const verifyid = () => (
  <div style={{ backgroundColor: "black" }}>
    <Card style={{ padding: "5rem" }}>
      <Row className="m-3">
        <h1> Identity Verification!!</h1>
      </Row>

      <Row>
        <Col>
          <h2 style={{ color: "black" }}> What to Upload.. </h2>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In et
            itaque iure ducimus magnam laudantium cupiditate accusamus ad quod
            quis a minus, nihil exercitationem nemo minima quo, illum similique
            ipsum?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In et
            itaque iure ducimus magnam laudantium cupiditate accusamus ad quod
            quis a minus, nihil exercitationem nemo minima quo, illum similique
            ipsum?
          </p>

          <br />
          <Button variant="primary">Upload Document</Button>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <img
                src={
                  "https://css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-1.gif"
                }
                alt="docupload"
                width="90%"
              />
              <br />
              <br />
              <Form.File
                id="exampleFormControlFile1"
                style={{ marginLeft: "12rem" }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Card>
  </div>
);
export default verifyid;
