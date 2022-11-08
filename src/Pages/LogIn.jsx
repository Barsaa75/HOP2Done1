import { useContext } from "react";
import { darkModeContext } from "../App";

const LogIn = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const body = {
    body: {
      height: "100vh",
      width: "100vw",
      backgroundColor: isDarkMode ? "white" : "gray",
      color: isDarkMode ? "white" : "black",
    },
  };

  return <div style={body.body}></div>;
};

export default LogIn;
