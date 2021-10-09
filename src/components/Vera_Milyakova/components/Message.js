import React from "react";
export const Message = ({ content }) => {
  return (
    <div className="message">
      <b>{content.author}: </b>
      {content.text}
    </div>
  );
};
