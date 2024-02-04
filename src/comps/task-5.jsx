import { useState } from "react";

export const TaskFive = () => {
  const [employees, setEmployees] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setEmployees(data);
  };
  fetchData();
  console.log(employees);
  return (
    <article>
      {employees[0].name ? (
        <>
          <p>{employees[1].id}</p>
          <p>{employees[1].name}</p>
        </>
      ) : (
        "Nix"
      )}
    </article>
  );
};
