import styles from "./Process.module.css";
import MLLogo from "../../assets/icons/MLLOGOONLY.svg";
import catWitch from "../../assets/icons/catwitch.svg";
import parchment from "../../assets/icons/parchment.svg";
import wand from "../../assets/icons/wand.svg";
import box from "../../assets/icons/box.svg";
import happyWitch from "../../assets/icons/happyWitch.svg";
import arrow from "../../assets/icons/arrow.svg";
function Process() {
  return (
    <div className={styles.productionWraper}>
      <h2>Nosso processo</h2>
      <div className={styles.processWraper}>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={MLLogo} alt="Mercado Livre Logo" />
          <h4>Você realiza o pedido</h4>
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={catWitch} alt="Cat Witch Logo" />
          <h4>Nós entramos em contato</h4>
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={parchment} alt="Pergaminho Logo" />
          <h4>Você escolhe seus componentes e as cores que você mais gosta</h4>
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={wand} alt="Varinha Logo" />
          <h4>Nós confeccionamos sua varinha</h4>
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={box} alt="Box Logo" />
          <h4>Enviamos para você em até 15 dias</h4>
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
        </div>
        <div className={styles.ProcessStep}>
          <img className={styles.img} src={happyWitch} alt="Bruxa Feliz Logo" />
          <h4>Após receber, é só aproveitar</h4>
        </div>
      </div>
    </div>
  );
}
export default Process;
