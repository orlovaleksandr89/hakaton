import React from "react";
export const SimpleText = (props) => {
  console.log(props);
  return (
    <section className="main-block">
      <h3>HELLO REACT, I'm {props.name}</h3>
      <span>Any developers here? - {String(props.someObj.isDeveloper)}</span>
      <Message skills={props.stack} />
    </section>
  );
};
const Message = (props) => {
  return (
    <ul>
      <span>What can I do?</span>
      {props.skills.map((elem) => {
        return (
          <li className="list" key={elem.id}>
            {elem.title}
          </li>
        );
      })}
    </ul>
  );
};
