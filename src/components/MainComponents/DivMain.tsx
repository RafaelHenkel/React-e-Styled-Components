import DivMainStyled from "./DivMainStyled";
import screen from "../../assets/monitor-azul.png";
import boxes from "../../assets/quadrados-azul.png";
import check from "../../assets/certinho-azul.png";

function DivMain() {
  return (
    <>
      <DivMainStyled>
        <img src={screen}></img>
        <h2>Somente para desktop</h2>
        <p>Vamos aprender, como utilizar um framework.</p>
      </DivMainStyled>
      <DivMainStyled>
        <img src={boxes}></img>
        <h2>Criado com componentes</h2>
        <p>Utilizamos o Styled Components.</p>
      </DivMainStyled>
      <DivMainStyled>
        <img src={check}></img>
        <h2>Fácil aproveitamento</h2>
        <p>Estamos no caminho.</p>
      </DivMainStyled>
    </>
  );
}

export default DivMain;
