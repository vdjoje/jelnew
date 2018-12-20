import React from "react";

const TriangleBack = () => {
  return (
    <span
    //   style={{
    //     position: "absolute",
    //     top: "70",
    //     left: "0"
    //   }}
    >
      <div className="backDiv">
        <div className="backDiv--lbgold" />
        <div className="backDiv--lb" />
      </div>
      <div className="line" />
      <div className="backDiv">
        <div className="backDiv--ltgold" />
        <div className="backDiv--lt" />
      </div>
      <div className="backDiv">
        <div className="backDiv--rbgold" />
        <div className="backDiv--rb" />
      </div>
      <div className="backDiv">
        <div className="backDiv--rtgold" />
        <div className="backDiv--rt" />
      </div>
      <div className="backDiv">
        <div className="backDiv--paragold" />
        <div className="backDiv--para" />
      </div>
      <div className="lastDiv">
        <div className="lastDiv--lastgold" />
        <div className="lastDiv--last" />
      </div>
    </span>
  );
};

export default TriangleBack;
