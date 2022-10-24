import { FC } from "react";
import TagText from "../TagText/TagText";

export interface IBlogCardTitle {
  title: string;
}

const BlogCardTitle: FC<IBlogCardTitle> = ({ title }: IBlogCardTitle) => {
  return <TagText tag={"h2"} content={title} />;
};

export default BlogCardTitle;
