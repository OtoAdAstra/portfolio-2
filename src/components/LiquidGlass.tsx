import "../styles/LiquidGlass.css";

type Props = {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  margin?: string;
  height?: string;
};

const LiquidGlass = ({ children, width, padding, margin, height }: Props) => {
  return (
    <>
      <div
        className="container container--inline"
        style={{
          width: `${width}`,
          padding: `${padding}px`,
          margin: `${margin}px`,
          height: `${height}px`,
        }}>
        <div className="glass-container glass-container--rounded glass-container--large">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content glass-content--inline">{children}</div>
        </div>
      </div>

      <div className="container">
        <div className="glass-container">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <svg style={{ display: "none" }}>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.008"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LiquidGlass;
