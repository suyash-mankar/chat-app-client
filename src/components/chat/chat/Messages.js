import React from "react";
import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/84366054/208151388-a2a456aa-16e8-4999-acd3-e0b794db1fb9.jpg");
  background-size: 40%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

export default function Messages() {
  return (
    <Wrapper>
      <Component></Component>
    </Wrapper>
  );
}
