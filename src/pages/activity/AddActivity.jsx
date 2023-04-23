import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminBreadcrumb from "../../components/breadcrumb/AdminBreadcrumb";
import AddActivityForm from "./AddActivityForm";

const AddActivity = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <AdminBreadcrumb page="Add New Activity" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddActivityForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddActivity;
