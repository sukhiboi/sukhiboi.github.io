import BlogCardTitle from "../BlogCardTitle/BlogCardTitle";
import styled from "styled-components";
import BlogContent from "../BlogCardContent/BlogCardContent";
import { FC } from "react";

export interface IBlogCard {
  title: string;
  initialContent: string;
}

const Card = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
  padding: 4px 0 10px;
`;

const BlogCard: FC<IBlogCard> = ({ title, initialContent }: IBlogCard) => {
  return (
    <Card>
      <BlogCardTitle title={title} />
      <BlogContent content={initialContent} />
    </Card>
  );
};

export default BlogCard;
