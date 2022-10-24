import { FC } from "react";

export interface IBlogCardContent {
  content: string;
}

const BlogCardContent: FC<IBlogCardContent> = ({
  content,
}: IBlogCardContent) => <p>{content}</p>;

export default BlogCardContent;
