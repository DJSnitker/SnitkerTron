import SocialCard from "./Components/Social/SocialCard";
import { socials, consoleLines } from "./data";
import Console from "./Components/Console/Console";
import "./App.css";

function App() {
  return (
    <>
      <h1
        style={{
          padding: "5px",
          margin: "0px",
          textAlign: "left",
          fontFamily: "PressStart2P",
          fontSize: "1.6em",
          border: "1px solid #26aa1a",
        }}
      >
        DORK I: An Engineers&apos; Resume
      </h1>
      <div className="menu-bar">
        {socials.map((social, index) => (
          <SocialCard key={index} socialData={social} />
        ))}
      </div>
      <Console data={consoleLines} />
    </>
  );
}

export default App;
