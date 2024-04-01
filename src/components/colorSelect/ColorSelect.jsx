import React, { useState } from "react";
import styles from "./ColorSelect.module.css";

const colors = [
  { hex: "#000000", name: "Preto", textColor: "#ffffff" },
  { hex: "#ffffff", name: "Branco", textColor: "#000000" },
  { hex: "#dd3029", name: "Vermelho Vivo", textColor: "#ffffff" },
  { hex: "#e03c45", name: "Romã", textColor: "#ffffff" },
  { hex: "#8e2c2a", name: "Cereja", textColor: "#ffffff" },
  { hex: "#a72525", name: "Vermelho Escarlate", textColor: "#ffffff" },
  { hex: "#6b2416", name: "Cerâmica", textColor: "#ffffff" },
  { hex: "#f2edef", name: "Rosa Bebê", textColor: "#000000" },
  { hex: "#ea9a9d", name: "Rosa", textColor: "#000000" },
  { hex: "#f27e7c", name: "Rosa Chá", textColor: "#000000" },
  { hex: "#ed8769", name: "Flamingo", textColor: "#000000" },
  { hex: "#d66c62", name: "Rosa Antigo", textColor: "#ffffff" },
  { hex: "#d59168", name: "Salmão", textColor: "#000000" },
  { hex: "#a688c0", name: "Lilas", textColor: "#000000" },
  { hex: "#800356", name: "Magenta", textColor: "#ffffff" },
  { hex: "#492b6b", name: "Violeta", textColor: "#ffffff" },
  { hex: "#08a5a0", name: "Turquesa", textColor: "#000000" },
  { hex: "#20a2cb", name: "Azul Celeste", textColor: "#000000" },
  { hex: "#3d81b1", name: "Azul Country", textColor: "#ffffff" },
  { hex: "#1f3f84", name: "Azul Turquesa", textColor: "#ffffff" },
  { hex: "#2ead8d", name: "Verde Country", textColor: "#000000" },
  { hex: "#69ab29", name: "Verde Maça", textColor: "#000000" },
  { hex: "#59c666", name: "Verde Folha", textColor: "#000000" },
  { hex: "#115925", name: "Verde Musgo", textColor: "#ffffff" },
  { hex: "#143027", name: "Verde Esmeralda", textColor: "#ffffff" },
  { hex: "#fffbe2", name: "Amarelo Pêssego", textColor: "#000000" },
  { hex: "#eee3c5", name: "Marfim", textColor: "#000000" },
  { hex: "#DACB1E", name: "Amarelo Limão", textColor: "#000000" },
  { hex: "#EBA910", name: "Amarelo Ouro", textColor: "#000000" },
  { hex: "#EF8A21", name: "Amarelo Cadmio", textColor: "#000000" },
  { hex: "#c5842a", name: "Amarelo Ocre", textColor: "#000000" },
  { hex: "#f35d32", name: "Laranja", textColor: "#000000" },
  { hex: "#d05b38", name: "Laranja Escuro", textColor: "#ffffff" },
  { hex: "#854f34", name: "Marrom", textColor: "#ffffff" },
  { hex: "#532e26", name: "Chocolate", textColor: "#ffffff" },
  { hex: "#423029", name: "Rústico", textColor: "#ffffff" },
];

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorClick = (color) => {
    if (selectedColors.length < 5) {
      if (
        selectedColors.some((selectedColor) => selectedColor.hex === color.hex)
      ) {
        alert("Esta cor já foi selecionada!");
      } else {
        setSelectedColors([...selectedColors, color]);
      }
    }
  };

  const handleRemoveColor = (index) => {
    const newColors = [...selectedColors];
    newColors.splice(index, 1);
    setSelectedColors(newColors);
  };

  return (
    <div>
      <div className={styles.selectColorsWrap}>
        {colors.map((color, index) => (
          <div key={index} className={styles.selectColorsSingle}>
            <div
              onClick={() => handleColorClick(color)}
              className={styles.colorBox}
              style={{
                backgroundColor: color.hex,
                color: color.textColor,
              }}
            >
              {selectedColors.includes(color) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ position: "absolute", top: "5px", right: "5px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveColor(index);
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.146 5.146a.5.5 0 0 1 .708 0L8 9.293l4.146-4.147a.5.5 0 1 1 .708.708L8.707 10l4.147 4.146a.5.5 0 0 1-.708.708L8 10.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 10 3.146 5.854a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
      <h3>Cores Selecionadas</h3>
      <div className={styles.selectedColorsWrap}>
        {selectedColors.map((color, index) => (
          <div
            key={index}
            style={{
              marginRight: "10px",
              height: "20vh",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
            }}
            onClick={() => handleRemoveColor(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ marginBottom: "1vh" }}
            >
              <path
                fill-rule="evenodd"
                d="M3.146 5.146a.5.5 0 0 1 .708 0L8 9.293l4.146-4.147a.5.5 0 1 1 .708.708L8.707 10l4.147 4.146a.5.5 0 0 1-.708.708L8 10.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 10 3.146 5.854a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <div
              style={{
                backgroundColor: color.hex,
                width: "30px",
                height: "30px",
                border: "1px solid #000",
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            />
            <span>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelect;
