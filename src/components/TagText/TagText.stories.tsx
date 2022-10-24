import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagText from "./TagText";

export default {
  title: "Tag Text",
  component: TagText,
} as ComponentMeta<typeof TagText>;

export const TagTitles: ComponentStory<typeof TagText> = () => (
  <>
    <TagText tag={"h1"} content={"Some Title"} />
    <TagText tag={"h2"} content={"Some Title"} />
    <TagText tag={"h3"} content={"Some Title"} />
    <TagText tag={"h4"} content={"Some Title"} />
    <TagText tag={"h5"} content={"Some Title"} />
    <TagText tag={"h6"} content={"Some Title"} />
    <TagText tag={"p"} content={"Some Content"} />
  </>
);
