import BlogCardTitle from "../BlogCardTitle/BlogCardTitle";
import styled from "styled-components";
import BlogCardContent from "../BlogCardContent/BlogCardContent";
import { FC } from "react";

export interface IBlogCard {
  id: string;
  title: string;
  content: string;
}

const Card = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
  padding: 4px 0 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const BlogCard: FC<IBlogCard> = ({ id, title, content }: IBlogCard) => {
  return (
    <Card data-testid={`blog-card-${id}`}>
      <BlogCardTitle title={title} />
      <BlogCardContent content={content} />
    </Card>
  );
};

export default BlogCard;
