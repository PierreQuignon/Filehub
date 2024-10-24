import React from "react";
import Header from "@/components/layout/header";

import UploadNewFile from "@/features/files/components/UploadNewFile";
import { Stack, Typography, useTheme } from "@mui/material";
import { MainContent } from ".";
import FileList from "@/features/files/components/FileList";

const MyFilesPage = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <MainContent>
        <Stack
          justifyContent="center"
          alignItems="center"
          padding="40px 10px"
          borderRadius="5vmin"
          gap="50px"
          width="80%"
          maxWidth="1100px"
          height="max(50vmin fit-content)"
          sx={{ border: `1px solid ${theme.palette.primary.main}` }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Mes fichiers
          </Typography>
          <FileList />
          <UploadNewFile />
        </Stack>
      </MainContent>
    </>
  );
};

export default MyFilesPage;
