import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const AdminBreadcrumb = ({ page }) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AdminBreadcrumb;
