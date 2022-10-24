import React, { FC } from "react";
import styled from "styled-components";

export interface ITagText {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content: string;
}

const tagMap = {
  h1: styled["h1"]`
    font-weight: 400;
  `,
  h2: styled["h2"]`
    font-weight: 400;
  `,
  h3: styled["h3"]`
    font-weight: 400;
  `,
  h4: styled["h4"]`
    font-weight: 400;
  `,
  h5: styled["h5"]`
    font-weight: 100;
  `,
  h6: styled["h6"]`
    font-weight: 100;
  `,
  p: styled["p"]`
    font-weight: 100;
  `,
};

const TagElement = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 100;
`;

const TagText: FC<ITagText> = ({ tag, content }: ITagText) => {
  const Tag = tagMap[tag];
  return (
    <Tag>
      <TagElement>{`<${tag}>`}</TagElement>
      {`${content}`}
      <TagElement>{`</${tag}>`}</TagElement>
    </Tag>
  );
};

export default TagText;
