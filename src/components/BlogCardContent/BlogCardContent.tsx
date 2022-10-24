import { FC } from "react";
import TagText from "../TagText/TagText";

export interface IBlogCardContent {
  content: string;
}

const BlogCardContent: FC<IBlogCardContent> = ({
  content,
}: IBlogCardContent) => <TagText tag={"p"} content={content} />;

export default BlogCardContent;
