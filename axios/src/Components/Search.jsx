import React from "react";

function Search() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <input
        type="text"
        placeholder="Bichne uu"
        style={{
          backgroundColor: "white",
          width: "500px",
          height: "50px",
          color: "white",
        }}
      />
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
