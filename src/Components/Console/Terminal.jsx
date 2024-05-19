import PropTypes from "prop-types";
import TerminalLine from "./TerminalLine";
import { useState, useEffect } from "react";

function Terminal({ terminalLines }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayLines, setDisplayLines] = useState([]);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      let newDisplay = [...displayLines, terminalLines[currentLine]];
      setDisplayLines(newDisplay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLine]);

  function incrementCurrentLine() {
    if (currentLine < terminalLines.length) {
      setCurrentLine(currentLine + 1);
    }
  }

  return (
    <div>
      {displayLines.map((line, index) => {
        return (
          <div key={index}>
            <TerminalLine
              text={line}
              delay={100}
              callback={incrementCurrentLine}
            />
          </div>
        );
      })}
    </div>
  );
}

Terminal.propTypes = {
  terminalLines: PropTypes.array.isRequired,
};
export default Terminal;
