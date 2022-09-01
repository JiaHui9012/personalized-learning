import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        height: "7em",
        width: "7em",
        overflow: "visible",
        margin: "auto",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
    >
      <Loader
        type="CradleLoader"
        color="#1A296B"
        height="inherit"
        width="inherit"
      />
    </div>
  );
};

export default Spinner;
