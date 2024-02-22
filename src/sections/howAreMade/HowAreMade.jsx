import styles from "./HowAreMade.module.css";
import videoSource from "../../assets/videos/howAreMade.mp4";

function HowAreMade() {
  return (
    <div className={styles.videoContainer}>
      <h2>Confira como nossas varinhas são produzidas</h2>
      <div className={styles.videoWrapper}>
        <video className={styles.video} controls controlsList="nodownload">
          <source src={videoSource} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
}

export default HowAreMade;
