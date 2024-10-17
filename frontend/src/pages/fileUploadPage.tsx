import Header from "@/components/layout/header";

import { useState } from "react";

import { MainContent } from ".";
import FileUploaded, {
  dataBaseFile,
} from "@/features/files/components/FileUploaded";
import FileUpload from "@/features/files/components/FileUpload";

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
