import React, { FC } from "react";
import styled from "styled-components";

export interface ITagText {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content: string;
}

const tagMap = {
  h1: styled["h1"]``,
  h2: styled["h2"]``,
  h3: styled["h3"]``,
  h4: styled["h4"]``,
  h5: styled["h5"]``,
  h6: styled["h6"]``,
  p: styled["p"]``,
};

const TagText: FC<ITagText> = ({ tag, content }: ITagText) => {
  const Tag = tagMap[tag];
  return (
    <Tag>
      {`<${tag}>`}
      {content}
      {`</${tag}>`}
    </Tag>
  );
};

export default TagText;
