import { FC } from "react";

export interface IBlogCardTitle {
  title: string;
}

const BlogCardTitle: FC<IBlogCardTitle> = ({ title }: IBlogCardTitle) => {
  return <h3>{title}</h3>;
};

export default BlogCardTitle;
