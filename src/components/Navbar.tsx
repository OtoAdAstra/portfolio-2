// import { toggleTheme } from "../utils/ToggleTheme";
import LiquidGlass from "./LiquidGlass";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <LiquidGlass width="25vw">
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Play</li>
            <li>Contact</li>
            {/* <li>
              <input type="checkbox" id="switch" onChange={toggleTheme} />
              <label htmlFor="switch">Toggle</label>
            </li> */}
          </ul>
        </nav>
      </LiquidGlass>
    </div>
  );
};

export default Navbar;
