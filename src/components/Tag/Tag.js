import React from "react";
import styled from "styled-components";

const TagDiv = styled.div`
  background-color: #e94a47;
  color: #fff;
  border-radius: 5px;
  padding: 1px;
  text-align: center;
  max-width: 100px;
`;
const Tag = (props) => {
  return <TagDiv>{props.tagName}</TagDiv>;
};

export default Tag;
