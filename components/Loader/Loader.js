import React from "react";
import  styles  from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img
        src="./images/gear.png"
        alt="Rotating Image"
        className={styles.image}
      />
      <img
        src="./images/gear.png"
        alt="Rotating Image"
        className={styles.image}
      />
      <img
        src="./images/gear.png"
        alt="Rotating Image"
        className={styles.image}
      />
    </div>
  );
};

export default Loader;
