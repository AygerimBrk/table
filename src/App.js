import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

const App = () => {
  let [users, setUsers] = useState([
    { name: "Jisoo", surName: "Kim", age: 20, id: 1 },
    { name: "Jennie", surName: "Kim", age: 22, id: 2 },
    { name: "Lisa", surName: "Monabol", age: 20, id: 3 },
    { name: "Rossie", surName: "Pak", age: 23, id: 4 },
    { name: "Youngi", surName: "Min", age: 25, id: 5 },
    { name: "Su A", surName: "Kim", age: 21, id: 6 },
    { name: "Jackon", surName: "Lohn", age: 21, id: 7 },
    { name: "Liam", surName: "Pol", age: 21, id: 8 },
  ]);
  console.log(users);

  const handleTask = (newObj) => {
    setUsers(newObj);
  };
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
