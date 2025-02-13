"use client";

import { FunctionComponent } from "react";

import { EditorWithPreview } from "../../components/EditorWithPreview";

import AboutMarkdown from "./work.md";

const AboutProfessionalInfoWorkPage: FunctionComponent = () => {
  return <EditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutProfessionalInfoWorkPage;
