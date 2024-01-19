import React, { useState } from "react";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const headerStyle = {
    background: "#333",
    color: "#ccc", // Updated color to grayish
    padding: "10px",
    textAlign: "center",
  };

  const logoStyle = {
    //   display: "flex",
    //   flexDirection: "row",
    //   alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "50px",
    color: "#fff",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginRight: "10px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
  };

  const liteOverlayStyle = {
    fontSize: "0.5rem",
    color: "#fff",
    opacity: "0.5",
    fontSize: "20px",
    position: "relative",
    rotate: "-20deg",
    top: "20px",
    left: "-24px",
    textShadow: !isHovered
      ? "0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #ffffff, 0 0 80px #ffffff"
      : "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
    transition: "all 0.5s ease-in-out",
  };
  return (
    <>
      <header className="header" style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Photoshop Lite</h1>
        </div>
      </header>
      <div
        className="psLogo"
        style={logoStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Ps
        <div className="liteOverlay" style={liteOverlayStyle}>
          Lite
        </div>
      </div>
    </>
  );
}

export default Header;
