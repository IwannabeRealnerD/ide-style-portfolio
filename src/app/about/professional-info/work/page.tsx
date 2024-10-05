"use client";

import { FunctionComponent } from "react";

import { GlobalEditorWithPreview } from "@/components/GlobalEditorWithPreview";

import AboutMarkdown from "./work.md";

const AboutProfessionalInfoWorkPage: FunctionComponent = () => {
  return <GlobalEditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutProfessionalInfoWorkPage;
