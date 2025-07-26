import { toggleTheme } from "../utils/ToggleTheme";
import LiquidGlass from "./LiquidGlass";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <LiquidGlass width="30vw">
        <nav>
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
