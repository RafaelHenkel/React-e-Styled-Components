import FooterAboutStyled from "./FooterAboutStyled";
import FooterStyled from "./FooterStyled";
import socialImage from "../../assets/social.png";

function FooterPage() {
  return (
    <>
      <FooterStyled>
        <FooterAboutStyled>
          <p>About | Contact | Term of Use | Privacy Policy</p>
          <small>Your Website 2024. All Rights Reserved</small>
        </FooterAboutStyled>
        <img src={socialImage} alt="" />
      </FooterStyled>
    </>
  );
}

export default FooterPage;
