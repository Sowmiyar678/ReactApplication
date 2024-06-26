import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

import EnrollService from "../../Service/EnrollService";
import Search from "../Common/Search";

const EnrollmentView = () => {
  const [Enrollment, setEnrollment] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEnrollment();
  }, []);

  const loadEnrollment = async () => {
    await EnrollService.EnrollList().then((response) => {
      setEnrollment(response.data);
    });
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-striped  table-hover shadow">
        <thead>
          <div data-testid="addenroll"> 
          <Link className="btn btn-primary mx-2" to={"/add-enrollment"}>
            Add Enrollment Details
          </Link> </div>
          <tr className="text-center">
            <th role="enrollid">Enrollment Id</th>
            <th role="enrolldate">Enrollment date</th>

            <th role="enrolluserid">User ID</th>
            <th role="enrollcourseid">Course ID</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Enrollment.map((Enroll) => (
            <tr key={Enroll.id}>
              <td>{Enroll.id}</td>

              <td>{Enroll.date}</td>
              <td>{Enroll.user.id}</td>
              <td>{Enroll.course.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EnrollmentView;
