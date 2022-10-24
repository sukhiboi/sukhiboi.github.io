import TagText from "../TagText/TagText";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 5%;
  border-bottom: 1px solid ${({ theme }) => theme.textPrimary};
`;

const Header = () => (
  <HeaderContainer data-testid={"header"}>
    <TagText tag={"h1"} content={"Sukhdev Singh"} />
  </HeaderContainer>
);

export default Header;
