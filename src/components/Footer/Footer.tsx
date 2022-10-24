import TagText from "../TagText/TagText";
import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.textPrimary};
`;

const Footer = () => (
  <FooterContainer>
    <TagText tag={"h2"} content={"Made with love by Sukhdev Singh"} />
  </FooterContainer>
);

export default Footer;
