import React from "react";
import { Table } from "react-bootstrap";

const ActivityTable = ({ activities }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Members Present</th>
            <th>Activity Type</th>
          </tr>
        </thead>
        <tbody>
          {activities.length > 0 ? (
            activities.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.subject}</td>
                  <td>{row.members}</td>
                  <td>{row.activityType}</td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center">No Activities Added</tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ActivityTable;
