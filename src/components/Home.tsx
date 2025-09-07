import Saturn from "../assets/saturn.png";
import wave from "../assets/wave.png";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={Saturn} alt="Saturn" className="saturn-image" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}>
        <h1 className="hello-world">HELLO WORLD</h1>
        <span>
          <img src={wave} alt="Wave" className="wave-image" />
        </span>
      </div>
    </div>
  );
};

export default Home;