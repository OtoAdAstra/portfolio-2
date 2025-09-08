import Saturn from "../assets/saturn.png";
import "../styles/home.css";
import { motion } from "motion/react";

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
          height: "fit-content",
        }}>
        <motion.h1
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          className="hello-world">
          HELLO WORLD
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
