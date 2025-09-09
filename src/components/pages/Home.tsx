import Saturn from "../../assets/saturn.png";
import "../../styles/home.css";
import { motion, useScroll, useTransform } from "motion/react";
import HelloApple from "../HelloApple";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div ref={ref} className="home" style={{ scale }}>
      <img src={Saturn} alt="Saturn" className="saturn-image" />
      <div className="hello-container">
        <HelloApple />
      </div>
    </motion.div>
  );
};

export default Home;
