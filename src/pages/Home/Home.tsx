import { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import BlogList from "../../components/BlogList/BlogList";

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Home: FC = () => (
  <>
    <Header />
    <Main>
      <BlogList blogs={[]} />
    </Main>
    <Footer />
  </>
);

export default Home;
