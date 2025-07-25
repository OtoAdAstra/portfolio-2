import { toggleTheme } from "../utils/ToggleTheme";
import LiquidGlass from "./LiquidGlass";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <LiquidGlass width="90vw" padding="10" margin="10" height="60">
        <nav>
          <h1>space</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button onClick={() => toggleTheme()}>toggle theme</button>
            </li>
          </ul>
        </nav>
      </LiquidGlass>
    </div>
  );
};

export default Navbar;
