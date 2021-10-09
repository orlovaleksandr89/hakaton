import React, { useEffect, useRef, useState } from "react";
import { Message } from "./components/Message";
import { TextField } from "@mui/material";
import image from "./img/crystal-ball.png";
import "./seance.css";

const messageList = [
  { text: "Я помню чудное мгновение передо мной явилась ты", author: "Пушкин" },
  { text: "Мне бы водки речушку, да баб деревеньку", author: "Есенин" },
  { text: "Белеет парус одинокий в тумане моря голубом", author: "Лермонтов" },
  {
    text: "Я не люблю пустого словаря любовных слов и жалких выражений",
    author: "Блок",
  },
  { text: "Я на правую руку надела перчатку с левой руки", author: "Ахматова" },
];

const answersList = [
  {
    text: "И я судьбу благословил,когда мой двор уединенный твой колокольчик огласил",
    author: "Пушкин",
  },
  {
    text: "Летели дни, крутясь проклятым роем, вино и страсть терзали жизнь мою",
    author: "Блок",
  },
  {
    text: "И скучно и грустно, и некому руку подать в минуту душевной невзгоды…",
    author: "Лермонтов",
  },
  {
    text: "Улыбнулся спокойно и жутко и сказал мне: «Не стой на ветру»",
    author: "Ахматова",
  },
  {
    text: "Я теперь скупее стал в желаньях, жизнь моя? иль ты приснилась мне?",
    author: "Есенин",
  },
];

const chatList = [
  { id: Date.now(), name: "Вячеслав" },
  { id: Date.now(), name: "Александр Сергевич" },
  { id: Date.now(), name: "Ольга" },
  { id: Date.now(), name: "Анна" },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "Вы") {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * answersList.length);
        setMessages((prevMessages) => [
          ...prevMessages,
          answersList[randomNum],
        ]);
      }, 2000);
      inputRef.current.focus();
    }
  }, [messages]);

  const handleAddMessage = () => {
    if (messageList.length !== 0) {
      const addingMessage = messageList.shift();
      setMessages((prevMessages) => [...prevMessages, addingMessage]);
    }
    setValue("");
    inputRef.current.focus();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: value, author: "Вы" },
    ]);
  };

  return (
    <div className="App">
      <h1 className="header">Spiritistic séance</h1>
      <div className="container">
        <div>
          {messages.map((message, i) => (
            <Message key={i} content={message} />
          ))}
          <button onClick={handleAddMessage} className="btn">
            Вызвать дух
          </button>
          <form onSubmit={handleSubmit} className="form">
            <TextField
              value={value}
              onChange={handleChange}
              id="outlined-basic"
              label="Ваш вопрос"
              variant="outlined"
              inputRef={inputRef}
            />
            {/* <input value={value} onChange={handleChange} className="input"></input> */}
            <input type="submit" value="Задать вопрос" className="btn"></input>
          </form>
        </div>
      </div>
      <img alt="pic" src={image} />
    </div>
  );
}

export default App;
