import React, { useState, useEffect } from "react";
import styles from "./StarCursor.module.css";

const StarCursor = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      const id = Date.now();
      setPositions((prevPositions) => [
        ...prevPositions,
        { x: e.clientX, y: e.clientY, id, createdAt: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const clearStars = setInterval(() => {
      setPositions((prevPositions) => {
        const currentTime = Date.now();
        return prevPositions.filter((pos) => currentTime - pos.createdAt < 500);
      });
    }, 500);

    return () => clearInterval(clearStars);
  }, []);

  return (
    <div className={styles.starCursor}>
      {positions.map((position) => (
        <div
          key={position.id}
          className={styles.star}
          style={{ left: position.x, top: position.y }}
        />
      ))}
    </div>
  );
};

export default StarCursor;
