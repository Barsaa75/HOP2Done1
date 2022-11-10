// import React from "react";
// import Names from "./Components/Names";
// import "./App.css";
// import Search from "./Components/Search";

// function App() {
//   return (
//     <div>
//       <Search />
//       <Names />
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import Page from "./pages/userPage";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const request = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    request();
  }, []);
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      {data?.map((el, index) => {
        return el.name.includes(value) && <Page key={index} data={el} />;
      })}
    </div>
  );
};
export default App;
