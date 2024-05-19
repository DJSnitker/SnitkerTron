import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Console.module.css";

function TerminalLine({ text, delay, callback }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      if (currentIndex === text.length - 1) {
        setBlink(false);
        callback();
      }
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div style={{ display: "inline-block", textAlign: "left" }}>
      <p>
        {currentText}
        {blink ? <span className={style.blink}>_</span> : ""}
      </p>
    </div>
  );
}

TerminalLine.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  callback: PropTypes.func,
};
export default TerminalLine;
