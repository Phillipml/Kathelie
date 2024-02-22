import styles from "./Intro.module.css";
import YourOwnWandImage from "../../assets/images/yourOwnWand.png";
function Intro() {
  return (
    <div className={styles.introWraper}>
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src={YourOwnWandImage}
          alt="Your Own Wand"
        />
      </div>

      <h2>Desperte a Magia da Personalização</h2>
      <p>
        Na Kathelie Varinhas, adentramos o mundo encantado da magia
        personalizada, onde cada varinha se torna uma extensão única de sua
        essência. Aqui, você não apenas compra uma varinha, mas sim, cria uma
        conexão íntima com cada componente, moldando sua própria história
        mágica. Deixe sua imaginação voar enquanto seleciona os elementos que
        irão compor sua varinha exclusiva. Adentre este universo singular e
        descubra a magia de ser o arquiteto de sua própria jornada mágica.
      </p>
    </div>
  );
}
export default Intro;
