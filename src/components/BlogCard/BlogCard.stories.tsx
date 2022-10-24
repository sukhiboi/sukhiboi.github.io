import BlogCard from "./BlogCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Blog Card",
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
);

export const BasicBlogPost = Template.bind(
  {},
  { title: "Blog Title", content: "Some initial Content" }
);
