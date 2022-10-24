import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BlogPost } from "../../types";
import BlogList from "./BlogList";

export default {
  title: "Blog List",
  component: BlogList,
} as ComponentMeta<typeof BlogList>;

const blogs: BlogPost[] = [
  { id: "1", title: "Blog1", content: "This is first blog" },
  { id: "2", title: "Blog2", content: "This is second blog" },
  { id: "3", title: "Blog3", content: "This is third blog" },
  { id: "4", title: "Blog4", content: "This is fourth blog" },
];

export const MultipleBlogs: ComponentStory<typeof BlogList> = () => (
  <BlogList blogs={blogs} />
);

export const BlogListWithZeroBlogs: ComponentStory<typeof BlogList> = () => (
  <BlogList blogs={[]} />
);
