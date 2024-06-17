import styled from "styled-components";
interface MainImageStyledProps {
  image: string;
}

const MainImageStyled = styled.div<MainImageStyledProps>`
  background-image: url({image});
  background-size: cover;
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainImageStyled;
