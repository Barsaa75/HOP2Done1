// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../App.css";

// function Names() {
//   const styles = {
//     body: {
//       width: "100vw",
//       height: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "50px",
//     },
//     box: {
//       width: "500px",
//       height: "100px",
//       border: "1px solid grey",
//     },
//   };
//   const [data, setData] = useState();
//   const request = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       setData(res.data);
//     });
//   };
//   useEffect(() => {
//     request();
//   }, []);

//   return (
//     <div className="container" style={styles.body}>
//       <div style={styles.box}>
//         {data &&
//           data.map((e) => {
//             return (
//               <div style={styles.box}>
//                 <div>name: {e.name}</div>
//                 <div>username: {e.username}</div>
//                 <div>email: {e.email}</div>

//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default Names;
