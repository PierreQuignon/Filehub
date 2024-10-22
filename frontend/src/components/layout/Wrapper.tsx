import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { theme } from "@/styles/theme";

interface FileInfoProps {
  isDragAccept?: boolean;
  isDragReject?: boolean;
}
export const Wrapper = styled(Stack)<FileInfoProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5vmin 12vmin;
  border: 1px solid ${theme.palette.primary.light};
  transition: border 0.24s ease-in-out;
  border-radius: 5vmin;
  width: 40vmin;
  height: max(50vmin, fit-content);
`;

const RectangleWrapper = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RectangleWrapper;
