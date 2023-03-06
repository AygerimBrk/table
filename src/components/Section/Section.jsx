import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <div className="table">
      <h2>User List</h2>
      <table border={1}>
        <thead className="tr">
          <tr>
            <th>Name</th>
            <th>SurName</th>
            <th>Age</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody className="tr">
          {props.users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
