import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlogCardTitle, { IBlogCardTitle } from "./BlogCardTitle";

export default {
  title: "Blog Card Title",
  component: BlogCardTitle,
} as ComponentMeta<typeof BlogCardTitle>;

const Template: ComponentStory<typeof BlogCardTitle> = (
  args: IBlogCardTitle
) => <BlogCardTitle {...args} />;

export const BasicBlogPost = Template.bind({}, { title: "Blog Card Title" });
