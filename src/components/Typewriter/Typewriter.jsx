import React, { useState, useEffect } from "react";
import "./Typewriter.scss"; // make sure to import your CSS file

const Typewriter = ({ text }) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypewriterText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // speed of typing

    return () => clearInterval(timer);
  }, [index, text]);

  return <div className="typewriter-text">{typewriterText}</div>;
};

export default Typewriter;
