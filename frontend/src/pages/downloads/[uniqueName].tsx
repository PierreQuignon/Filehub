import React from "react";
import { GetServerSideProps } from "next";

import Header from "@/components/layout/Header";
import { useRouter } from "next/router";
import { MainContent } from "..";
import FileDownload from "@/features/files/components/FileDownload";

interface DownloadPageProps {
  uniqueName?: string;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ uniqueName }) => {
  const router = useRouter();
  const fileName = router.query.uniqueName;

  return (
    <>
      <Header />
      <MainContent>
        <FileDownload fileName={fileName} />
      </MainContent>
    </>
  );
};

export default DownloadPage;

export const getServerSideProps: GetServerSideProps<DownloadPageProps> = async (
  context,
) => {
  const { uniqueName } = context.params || {};
  return {
    props: {
      uniqueName: typeof uniqueName === "string" ? uniqueName : "",
    },
  };
};
