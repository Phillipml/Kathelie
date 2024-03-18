import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#fff",
        zIndex: 99999999, // Definindo zIndex diretamente no estilo inline
      }}
      outerStyle={{
        border: "3px solid #ffd700",
      }}
    />
  );
}

export default Cursor;
