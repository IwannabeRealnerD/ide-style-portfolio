"use client";

import { FunctionComponent } from "react";

import { EditorWithPreview } from "../../components/EditorWithPreview";

import AboutMarkdown from "./bio.md";

const AboutPersonalInfoBioPage: FunctionComponent = () => {
  return <EditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutPersonalInfoBioPage;
