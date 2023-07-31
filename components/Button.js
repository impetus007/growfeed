import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <div className="feedButton">
      <button onClick={onClick} className="feed_button">
        {value}
      </button>
    </div>
  );
};

export default Button;
