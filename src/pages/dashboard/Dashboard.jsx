import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ActivityTable from "../activity/ActivityTable";
import activities from "../../assets/stub/mock-activity.json";
import AdminBreadcrumb from "../../components/breadcrumb/AdminBreadcrumb";
const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <AdminBreadcrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button variant="success">Add new Activity</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2 mb-2">
            <div>Total Activity: 50</div>
            <div>Activities Last 7 days: 10</div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">Recent Activities</Col>
        </Row>
        <Row>
          <Col className="text-center mt-2 mb-2">
            <ActivityTable activities={activities} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
