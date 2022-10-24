import { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Home: FC = () => (
  <>
    <Header />
    <Main>Main Area</Main>
    <Footer />
  </>
);

export default Home;
