import Saturn from "../assets/saturn.png";
import wave from "../assets/wave.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={Saturn} alt="Saturn" className="saturn-image" />
      <h1
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        Hello!
        <span>
          <img src={wave} alt="Wave" className="wave-image" />
        </span>
      </h1>
    </div>
  );
};

export default Home;
