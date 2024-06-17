import styled from "styled-components";
import water from "../../assets/agua.jpg";

interface DivPageStyledProps {
  height?: string;
}
const DivPageStyled = styled.div<DivPageStyledProps>`
  height: ${({ height }) => height ?? "350px"};
  width: 100%;
  background-image: url(${water});
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`;

export default DivPageStyled;
