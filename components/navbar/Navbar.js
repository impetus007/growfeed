import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mode, setMode] = useState("Dark Mode");

  const handleMode = () => {
    setMode((prevMode) =>
      prevMode === "Dark Mode" ? "Light Mode" : "Dark Mode"
    );
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Image src="./images/grow.svg" height={80} width={80} />
      </div>

      <div className={styles.navbar_right}>
        <Button onClick={handleMode} value={mode} />
      </div>
    </div>
  );
};

export default Navbar;
