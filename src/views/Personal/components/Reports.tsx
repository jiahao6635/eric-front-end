import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Reports;
