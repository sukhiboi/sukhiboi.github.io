import BlogPostTitle from "../BlogPostTitle/BlogPostTitle";
import styled from "styled-components";

export interface IBlogPost {
  title: string;
}

const Container = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
  padding: 4px 0 10px;
`;

export default ({ title }: IBlogPost) => {
  return (
    <Container>
      <BlogPostTitle title={title} />
    </Container>
  );
};
