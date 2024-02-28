import React, { useState } from "react";
import styles from "./AllWandsComponents.module.css";

// Importando imagens individualmente e exportando-as diretamente
import wand1 from "../../assets/wandComponents/wand/wand1.png";
import wand2 from "../../assets/wandComponents/wand/wand2.png";
import wand3 from "../../assets/wandComponents/wand/wand3.png";
import wand4 from "../../assets/wandComponents/wand/wand4.png";
import connector1 from "../../assets/wandComponents/connector/connector1.png";
import connector2 from "../../assets/wandComponents/connector/connector2.png";
import connector3 from "../../assets/wandComponents/connector/connector3.png";
import connector4 from "../../assets/wandComponents/connector/connector4.png";
import connector5 from "../../assets/wandComponents/connector/connector5.png";
import connector6 from "../../assets/wandComponents/connector/connector6.png";
import connector7 from "../../assets/wandComponents/connector/connector7.png";
import connector8 from "../../assets/wandComponents/connector/connector8.png";
import connector9 from "../../assets/wandComponents/connector/connector9.png";
import connector10 from "../../assets/wandComponents/connector/connector10.png";
import handle1 from "../../assets/wandComponents/handle/handle1.png";
import handle2 from "../../assets/wandComponents/handle/handle2.png";
import handle3 from "../../assets/wandComponents/handle/handle3.png";
import handle4 from "../../assets/wandComponents/handle/handle4.png";
import handle5 from "../../assets/wandComponents/handle/handle5.png";
import handle6 from "../../assets/wandComponents/handle/handle6.png";
import handle7 from "../../assets/wandComponents/handle/handle7.png";
import handle8 from "../../assets/wandComponents/handle/handle8.png";
import base1 from "../../assets/wandComponents/base/base1.png";
import base2 from "../../assets/wandComponents/base/base2.png";
import base3 from "../../assets/wandComponents/base/base3.png";
import base4 from "../../assets/wandComponents/base/base4.png";
import base5 from "../../assets/wandComponents/base/base5.png";
import base6 from "../../assets/wandComponents/base/base6.png";
import base7 from "../../assets/wandComponents/base/base7.png";
import base8 from "../../assets/wandComponents/base/base8.png";
import base9 from "../../assets/wandComponents/base/base9.png";

const itemImages = {
  Varinha: [wand1, wand2, wand3, wand4],
  Conector: [
    connector1,
    connector2,
    connector3,
    connector4,
    connector5,
    connector6,
    connector7,
    connector8,
    connector9,
    connector10,
  ],
  Empunhadura: [
    handle1,
    handle2,
    handle3,
    handle4,
    handle5,
    handle6,
    handle7,
    handle8,
  ],
  Base: [base1, base2, base3, base4, base5, base6, base7, base8, base9],
};

const GalleryComponent = ({ selectedItem }) => {
  const images = itemImages[selectedItem] || [];

  return (
    <div className={styles.galleryWraper}>
      <div className={styles.imageGallery}>
        {images.map((image, index) => (
          <img
            className={styles.componentsImages}
            key={index}
            src={image}
            alt={`${selectedItem}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const MenuComponent = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div className={styles.galleryWrapper}>
      <h2>Crie Sua Própria Varinha Mágica!</h2>
      <p>
        Você está no lugar certo para dar vida à sua própria varinha
        personalizada. Explore nossa seleção de componentes mágicos e escolha os
        as partes que mais ressoam com você. Temos tudo o que você precisa para
        criar a varinha dos seus sonhos. Deixe sua imaginação voar enquanto você
        navega pelos nossos itens disponíveis. Comece sua jornada mágica agora
        mesmo!
      </p>
      <ul className={styles.menu}>
        {Object.keys(itemImages).map((item, index) => (
          <li
            className={styles.listSingle}
            key={index}
            onClick={() => handleItemClick(item)}
            style={{
              color: selectedItem === item ? "#ffd700" : "white",
              textShadow:
                selectedItem === item
                  ? "0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700, 0 0 50px #ffd700, 0 0 60px #ffd700, 0 0 70px #ffd700, 0 0 80px #ffd700"
                  : "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AllWandsComponents = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <MenuComponent onSelect={handleSelect} />
      <GalleryComponent selectedItem={selectedItem} />
    </div>
  );
};

export default AllWandsComponents;
