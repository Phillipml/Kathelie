import React, { useState, useRef } from "react";
import styles from "./WandGenerator.module.css";
import html2canvas from "html2canvas";
import ColorSelect from "../../components/colorSelect/ColorSelect";
import Input from "../../components/input/Input";
import loadingGif from "../../assets/icons/loading.gif";
import Header from "../../sections/header/Header";

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

function WandGenerator() {
  const [loading, setLoading] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [selectedItems, setSelectedItems] = useState({
    Varinha: null,
    Conector: null,
    Empunhadura: null,
    Base: null,
  });

  const [categoryVisibility, setCategoryVisibility] = useState({
    Varinha: false,
    Conector: false,
    Empunhadura: false,
    Base: false,
  });

  const [colorPickerVisible, setColorPickerVisible] = useState(true);
  const contentRef = useRef(null);

  const toggleCategoryImages = (category) => {
    setCategoryVisibility({
      ...categoryVisibility,
      [category]: !categoryVisibility[category],
    });
  };

  const selectItem = (category, itemCode) => {
    setSelectedItems({ ...selectedItems, [category]: { category, itemCode } });
    setCategoryVisibility({
      ...categoryVisibility,
      [category]: false,
    });
  };

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

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleDownloadImage = () => {
    setHeaderVisible(false);
    setColorPickerVisible(false);
    setTimeout(() => {
      setLoading(true);
    }, 200);

    let contentWidth = 1800;
    let contentHeight = 2000;

    if (window.innerWidth < 800) {
      contentWidth = 400;
      contentHeight = 2000;
    }

    setTimeout(() => {
      html2canvas(contentRef.current, {
        backgroundColor: window.getComputedStyle(document.body).backgroundColor,
        width: contentWidth,
        height: contentHeight,
        scale: window.devicePixelRatio,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = imgData;
        downloadLink.download = `${userName}_wand.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();

        setLoading(false);
        setHeaderVisible(true);
        setColorPickerVisible(true);
      });
    }, 100);
  };

  return (
    <div>
      {!headerVisible && <Header />}
      <div ref={contentRef} className={styles.WandGeneratorWraper}>
        <h2>Código de compra</h2>
        <div className={styles.inputSize}>
          <Input
            placeHolder="Código de compra"
            width="50%"
            padding="2%"
            onChange={handleChange}
          />
        </div>
        <h2>Selecione um item de cada categoria:</h2>
        {renderMenuOptions()}
        <div>
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
                        className={styles.img}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "0 auto",
                          display:
                            img.code === item.itemCode
                              ? "inline-block"
                              : "none",
                        }}
                      />
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
        <h2>Hora de escolher suas cores favoritas:</h2>
        <ColorSelect
          maxColors={1}
          label=" cor para a varinha"
          visible={colorPickerVisible}
        />
        <ColorSelect
          maxColors={5}
          label=" cores utilizarmos nas demais partes"
          visible={colorPickerVisible}
          selectedLabel="Cor selecionada"
        />
        <div className={styles.inputSize}>
          <textarea
            className={styles.textArea}
            placeholder="OBSERVAÇÕES COMO: 'BASE: VERMELHO ESCARLATE COM DETALHES MAGENTA', OU QUALQUER OUTRA INFORMAÇÃO QUE QUEIRA ADICIONAR"
          />
        </div>
        <div className={styles.menu}>
          <button onClick={handleDownloadImage} className={styles.btnMenu}>
            Salvar como PDF
          </button>
          {loading && (
            <div className={styles.loadingOverlay}>
              <img
                src={loadingGif}
                alt="Loading"
                className={styles.loadingGif}
              />
              <h2>Gerando Imagem</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WandGenerator;
