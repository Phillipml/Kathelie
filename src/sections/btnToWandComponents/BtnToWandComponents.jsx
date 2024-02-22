import { Link } from "react-router-dom";
import styles from "./BtnToWandComponents.module.css";
function BtnToWandComponents() {
  return (
    <div className={styles.btnWraper}>
      <Link to="/all-wands-components" className={styles.btn}>
        <p>Confira os componentes para sua varinha</p>
      </Link>
    </div>
  );
}
export default BtnToWandComponents;
