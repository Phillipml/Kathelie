import React, { useState } from "react";
import styles from "./WandGenerator.module.css";

// Importe as imagens
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

// Defina as imagens em um objeto
const itemImages = {
  Varinha: [
    { image: wand1, code: "wd1" },
    { image: wand2, code: "wd2" },
    { image: wand3, code: "wd3" },
    { image: wand4, code: "wd4" },
  ],
  Conector: [
    { image: connector1, code: "cn1" },
    { image: connector2, code: "cn2" },
    { image: connector3, code: "cn3" },
    { image: connector4, code: "cn4" },
    { image: connector5, code: "cn5" },
    { image: connector6, code: "cn6" },
    { image: connector7, code: "cn7" },
    { image: connector8, code: "cn8" },
    { image: connector9, code: "cn9" },
    { image: connector10, code: "cn10" },
  ],
  Empunhadura: [
    { image: handle1, code: "hd1" },
    { image: handle2, code: "hd2" },
    { image: handle3, code: "hd3" },
    { image: handle4, code: "hd4" },
    { image: handle5, code: "hd5" },
    { image: handle6, code: "hd6" },
    { image: handle7, code: "hd7" },
    { image: handle8, code: "hd8" },
  ],
  Base: [
    { image: base1, code: "bs1" },
    { image: base2, code: "bs2" },
    { image: base3, code: "bs3" },
    { image: base4, code: "bs4" },
    { image: base5, code: "bs5" },
    { image: base6, code: "bs6" },
    { image: base7, code: "bs7" },
    { image: base8, code: "bs8" },
    { image: base9, code: "bs9" },
  ],
};

// Componente principal
// Componente principal
function WandGenerator() {
  // Estado para controlar a seleção dos itens
  const [selectedItems, setSelectedItems] = useState({
    Varinha: null,
    Conector: null,
    Empunhadura: null,
    Base: null,
  });

  // Estado para controlar a visibilidade das categorias
  const [categoryVisibility, setCategoryVisibility] = useState({
    Varinha: false,
    Conector: false,
    Empunhadura: false,
    Base: false,
  });

  // Função para alternar a visibilidade das imagens de uma categoria
  const toggleCategoryImages = (category) => {
    setCategoryVisibility({
      ...categoryVisibility,
      [category]: !categoryVisibility[category],
    });
  };

  // Função para definir o item selecionado e fechar a categoria correspondente
  const selectItem = (category, itemCode) => {
    setSelectedItems({ ...selectedItems, [category]: { category, itemCode } });
    // Fechar a categoria correspondente
    setCategoryVisibility({
      ...categoryVisibility,
      [category]: false,
    });
  };

  // Função para renderizar as opções do menu
  const renderMenuOptions = () => {
    return Object.entries(itemImages).map(([category, items]) => (
      <div className={styles.menu} key={category}>
        <button
          className={styles.btnMenu}
          onClick={() => toggleCategoryImages(category)}
        >
          {category}
        </button>
        <div
          style={{
            display: categoryVisibility[category] ? "flex" : "none",
            flexWrap: "wrap",
          }}
        >
          {items.map((item) => (
            <div className={styles.ChooseItem} key={item.code}>
              <img
                src={item.image}
                alt={item.code}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "5px",
                  cursor: "pointer",
                  display: categoryVisibility[category]
                    ? "inline-block"
                    : "none",
                }}
                onClick={() => selectItem(category, item.code)}
              />
              <p>{item.code}</p>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  // Renderização do componente
  return (
    <div>
      <h2>Selecione um item de cada categoria:</h2>
      {renderMenuOptions()}
      <div>
        <h3>Itens Selecionados:</h3>
        <div className={styles.selectedWraper}>
          {Object.values(selectedItems).map(
            (item, index) =>
              item && (
                <div key={index} className={styles.itemSingle}>
                  <p className={styles.categoryTitle}>{item.category}</p>
                  <p className={styles.codeTitle}>{item.itemCode}</p>
                  {itemImages[item.category].map((img) => (
                    <img
                      key={img.code}
                      src={img.image}
                      alt={img.code}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "5px",
                        display:
                          img.code === item.itemCode ? "inline-block" : "none",
                      }}
                    />
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default WandGenerator;
