import DivPageStyled from "../components/PageComponents/DivPageStyled";
import DivMain from "../components/MainComponents/DivMain";
import MainCards from "../components/MainComponents/MainCards";
import MainPageStyled from "../components/MainComponents/MainPageStyled";
import MainImageStyled from "../components/MainComponents/MainImageStyled";
import cellImage from "../assets/celular.png";
import CodeImage from "../assets/codigos.png";
import kidImage from "../assets/crianca.png";
import FooterPage from "../components/FooterComponents/FooterPage";

function Home() {
  return (
    <>
      <DivPageStyled>
        <h1>Minha primeira pagina com React.</h1>
      </DivPageStyled>
      <MainPageStyled>
        <DivMain />
      </MainPageStyled>
      <MainPageStyled>
        <MainCards>
          <MainImageStyled image={cellImage} />
        </MainCards>
      </MainPageStyled>
      <MainPageStyled>
        <MainCards switchCards={true}>
          <MainImageStyled image={CodeImage} />
        </MainCards>
      </MainPageStyled>
      <MainPageStyled>
        <MainCards>
          <MainImageStyled image={kidImage} />
        </MainCards>
      </MainPageStyled>
      <DivPageStyled height="200px">
        <h2>Contato</h2>
      </DivPageStyled>
      <FooterPage />
    </>
  );
}

export default Home;
