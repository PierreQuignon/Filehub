import FileUploaded, { dataBaseFile } from "@/components/FileUploaded";
import Header from "@/components/layout/header";

import { useState } from "react";

import FileUpload from "@/components/FileUpload";
import { MainContent } from ".";

const FileUploadPage = () => {
  const [fileUploaded, setFileUploaded] = useState<dataBaseFile | undefined>(
    undefined,
  );

  return (
    <>
      <Header />
      <MainContent>
        {fileUploaded ? (
          <FileUploaded file={fileUploaded} setFileUploaded={setFileUploaded} />
        ) : (
          <FileUpload setFileUploaded={setFileUploaded} />
        )}
      </MainContent>
    </>
  );
};

export default FileUploadPage;
