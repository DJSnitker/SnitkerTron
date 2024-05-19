//import { useEffect, useState } from "react";
//import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";
import style from "./Console.module.css";
import doug from "../../assets/images/Avatar2.png";
import Terminal from "./Terminal";

function Console({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <div className={style.contextImageBox}>
        <img src={doug} alt="Image of Doug Snitker as Pixel Art" />
      </div>
      <div className={style.console}>
        <Terminal terminalLines={data} />
      </div>
    </div>
  );
}

Console.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Console;
