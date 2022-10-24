import BlogPost from "./BlogPost";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Blog Post",
  component: BlogPost,
} as ComponentMeta<typeof BlogPost>;

const Template: ComponentStory<typeof BlogPost> = (args) => (
  <BlogPost {...args} />
);

export const BasicBlogPost = Template.bind({}, { title: "Blog Title" });
