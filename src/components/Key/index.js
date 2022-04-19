import React from "react";
import "./style.css";
const Key = ({ keyObj }) => {
  return (
    <div className={`key__container ${keyObj?.status}`}>{keyObj?.value}</div>
  );
};

export default Key;
