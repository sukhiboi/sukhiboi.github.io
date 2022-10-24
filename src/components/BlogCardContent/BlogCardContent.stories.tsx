import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlogCardContent from "./BlogCardContent";

export default {
  title: "Blog Card Content",
  component: BlogCardContent,
} as ComponentMeta<typeof BlogCardContent>;

const Template: ComponentStory<typeof BlogCardContent> = (args) => (
  <BlogCardContent {...args} />
);

export const BasicBlogContent = Template.bind(
  {},
  { content: "Blog Card Content" }
);
