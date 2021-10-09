import React from "react";
import { useState, useEffect } from "react";
import Member from "../components/Member";
import { fetchAll } from "../data/Data";
import logo from "./Vera_Milyakova/img/logo512.png";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetchAll().then((data) => {
      setMembers(data);
    });
  }, []);

  if (members) {
    return (
      <div className="container">
        {members.length ? (
          <Member members={members} />
        ) : (
          <img width="40%" className="rot" src={logo}></img>
        )}
      </div>
    );
  }
  return;
};

export default MemberList;
