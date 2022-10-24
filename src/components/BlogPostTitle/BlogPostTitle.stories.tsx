import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlogPostTitle, { IBlogPostTitle } from "./BlogPostTitle";

export default {
  title: "Blog Post Title",
  component: BlogPostTitle,
} as ComponentMeta<typeof BlogPostTitle>;

const Template: ComponentStory<typeof BlogPostTitle> = (
  args: IBlogPostTitle
) => <BlogPostTitle {...args} />;

export const BasicBlogPost = Template.bind({}, { title: "Blog Title" });
