import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const BasicHeader: ComponentStory<typeof Footer> = () => <Footer />;
